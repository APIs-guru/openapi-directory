from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ManualTriggerStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    INACTIVE = "INACTIVE"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class ManualTrigger:
    activation_duration_minutes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activationDurationMinutes' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    latest_activation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestActivationTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[ManualTriggerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerId' }})
    
