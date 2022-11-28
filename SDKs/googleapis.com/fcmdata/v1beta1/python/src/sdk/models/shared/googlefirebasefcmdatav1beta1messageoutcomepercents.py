from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFirebaseFcmDataV1beta1MessageOutcomePercents:
    r"""GoogleFirebaseFcmDataV1beta1MessageOutcomePercents
    Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes.
    """
    
    delivered: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivered') }})
    dropped_app_force_stopped: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droppedAppForceStopped') }})
    dropped_device_inactive: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droppedDeviceInactive') }})
    dropped_too_many_pending_messages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droppedTooManyPendingMessages') }})
    pending: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending') }})
    
