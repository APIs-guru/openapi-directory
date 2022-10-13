from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import deviceinfo
from . import devicenames
from . import agentotherdeviceid


@dataclass_json
@dataclass
class Device:
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    custom_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customData' }})
    device_info: Optional[deviceinfo.DeviceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceInfo' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[devicenames.DeviceNames] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_supported_by_agent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationSupportedByAgent' }})
    other_device_ids: Optional[List[agentotherdeviceid.AgentOtherDeviceID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherDeviceIds' }})
    room_hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roomHint' }})
    structure_hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structureHint' }})
    traits: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traits' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    will_report_state: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'willReportState' }})
    
