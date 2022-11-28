from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1CommitmentSettingsInput:
    r"""GoogleCloudChannelV1CommitmentSettingsInput
    Commitment settings for commitment-based offers.
    """
    
    renewal_settings: Optional[GoogleCloudChannelV1RenewalSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalSettings') }})
    

@dataclass_json
@dataclass
class GoogleCloudChannelV1CommitmentSettings:
    r"""GoogleCloudChannelV1CommitmentSettings
    Commitment settings for commitment-based offers.
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    renewal_settings: Optional[GoogleCloudChannelV1RenewalSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalSettings') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
