from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ManualTriggerStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    INACTIVE = "INACTIVE"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class ManualTriggerInput:
    r"""ManualTriggerInput
    A single manual trigger in Display & Video 360.
    """
    
    activation_duration_minutes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationDurationMinutes') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    

@dataclass_json
@dataclass
class ManualTrigger:
    r"""ManualTrigger
    A single manual trigger in Display & Video 360.
    """
    
    activation_duration_minutes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationDurationMinutes') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    latest_activation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestActivationTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[ManualTriggerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    
