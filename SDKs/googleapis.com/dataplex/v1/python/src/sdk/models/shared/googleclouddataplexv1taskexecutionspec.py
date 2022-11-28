from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskExecutionSpec:
    r"""GoogleCloudDataplexV1TaskExecutionSpec
    Execution related settings, like retry and service_account.
    """
    
    args: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKey') }})
    max_job_execution_lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxJobExecutionLifetime') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    
