from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WritableDeviceTypeParentChildStatusEnum(str, Enum):
    PARENT = "parent"
    CHILD = "child"


@dataclass_json
@dataclass
class WritableDeviceTypeInput:
    manufacturer: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    is_full_depth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_full_depth') }})
    part_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('part_number') }})
    subdevice_role: Optional[WritableDeviceTypeParentChildStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subdevice_role') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    u_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('u_height') }})
    
