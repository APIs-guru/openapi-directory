from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritableRackInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    desc_units: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc_units') }})
    facility_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facility_id') }})
    group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    role: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    u_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('u_height') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
