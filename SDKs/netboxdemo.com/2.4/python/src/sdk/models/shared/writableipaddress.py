from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritableIPAddressInput:
    address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    nat_outside: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nat_outside') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    interface: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface') }})
    nat_inside: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nat_inside') }})
    role: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    vrf: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vrf') }})
    
