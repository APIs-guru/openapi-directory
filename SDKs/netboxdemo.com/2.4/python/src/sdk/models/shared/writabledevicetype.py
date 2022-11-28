from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritableDeviceTypeInput:
    manufacturer: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    interface_ordering: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface_ordering') }})
    is_console_server: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_console_server') }})
    is_full_depth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_full_depth') }})
    is_network_device: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_network_device') }})
    is_pdu: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_pdu') }})
    part_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('part_number') }})
    subdevice_role: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subdevice_role') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    u_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('u_height') }})
    
