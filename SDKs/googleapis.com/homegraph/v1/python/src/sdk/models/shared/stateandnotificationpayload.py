from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reportstateandnotificationdevice


@dataclass_json
@dataclass
class StateAndNotificationPayload:
    devices: Optional[reportstateandnotificationdevice.ReportStateAndNotificationDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    
