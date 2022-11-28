from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NestedRole:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    prefix_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix_count') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    vlan_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan_count') }})
    
