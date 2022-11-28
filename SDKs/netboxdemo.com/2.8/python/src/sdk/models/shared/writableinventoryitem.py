from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritableInventoryItemInput:
    device: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    asset_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_tag') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    discovered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discovered') }})
    manufacturer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    parent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    part_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('part_id') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
