from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ManufacturerInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclass
class Manufacturer:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    devicetype_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicetype_count') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    inventoryitem_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryitem_count') }})
    platform_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform_count') }})
    
