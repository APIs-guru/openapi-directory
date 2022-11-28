from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PaginationMeta:
    max_page: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_page') }})
    page: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    total_items: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_items') }})
    
