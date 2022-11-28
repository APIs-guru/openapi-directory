from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    

@dataclass_json
@dataclass
class Tag:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    tagged_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagged_items') }})
    
