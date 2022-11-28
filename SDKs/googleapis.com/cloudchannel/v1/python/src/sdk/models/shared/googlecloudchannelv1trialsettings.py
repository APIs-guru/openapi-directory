from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudChannelV1TrialSettings:
    r"""GoogleCloudChannelV1TrialSettings
    Settings for trial offers.
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    trial: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trial') }})
    
