from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents:
    delayed_device_doze: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delayedDeviceDoze' }})
    delayed_device_offline: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delayedDeviceOffline' }})
    delayed_message_throttled: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delayedMessageThrottled' }})
    delayed_user_stopped: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delayedUserStopped' }})
    delivered_no_delay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveredNoDelay' }})
    
