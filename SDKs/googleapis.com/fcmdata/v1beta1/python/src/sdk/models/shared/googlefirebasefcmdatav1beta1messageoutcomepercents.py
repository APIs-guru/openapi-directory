from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleFirebaseFcmDataV1beta1MessageOutcomePercents:
    delivered: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivered' }})
    dropped_app_force_stopped: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droppedAppForceStopped' }})
    dropped_device_inactive: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droppedDeviceInactive' }})
    dropped_too_many_pending_messages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droppedTooManyPendingMessages' }})
    pending: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    
