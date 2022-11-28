from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WritableRackOuterUnitEnum(str, Enum):
    MM = "mm"
    IN = "in"

class WritableRackStatusEnum(str, Enum):
    RESERVED = "reserved"
    AVAILABLE = "available"
    PLANNED = "planned"
    ACTIVE = "active"
    DEPRECATED = "deprecated"

class WritableRackTypeEnum(str, Enum):
    TWO_POST_FRAME = "2-post-frame"
    FOUR_POST_FRAME = "4-post-frame"
    FOUR_POST_CABINET = "4-post-cabinet"
    WALL_FRAME = "wall-frame"
    WALL_CABINET = "wall-cabinet"


@dataclass_json
@dataclass
class WritableRackInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    asset_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_tag') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    desc_units: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc_units') }})
    facility_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facility_id') }})
    group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    outer_depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outer_depth') }})
    outer_unit: Optional[WritableRackOuterUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outer_unit') }})
    outer_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outer_width') }})
    role: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    status: Optional[WritableRackStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    type: Optional[WritableRackTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    u_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('u_height') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
