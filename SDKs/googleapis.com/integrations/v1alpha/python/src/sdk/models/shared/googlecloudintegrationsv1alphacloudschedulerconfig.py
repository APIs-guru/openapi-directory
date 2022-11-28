from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaCloudSchedulerConfig:
    r"""GoogleCloudIntegrationsV1alphaCloudSchedulerConfig
    Cloud Scheduler Trigger configuration
    """
    
    cron_tab: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cronTab') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    
