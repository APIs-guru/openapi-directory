from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Device:
    r"""Device
    Third-party device definition. Next ID = 14
    """
    
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    custom_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customData') }})
    device_info: Optional[DeviceInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceInfo') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[DeviceNames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_supported_by_agent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationSupportedByAgent') }})
    other_device_ids: Optional[List[AgentOtherDeviceID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherDeviceIds') }})
    room_hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roomHint') }})
    structure_hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structureHint') }})
    traits: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traits') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    will_report_state: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('willReportState') }})
    
