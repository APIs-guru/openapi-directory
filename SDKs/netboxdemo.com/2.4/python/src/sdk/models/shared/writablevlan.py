from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritableVlanInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    vid: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vid') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    role: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    site: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    
