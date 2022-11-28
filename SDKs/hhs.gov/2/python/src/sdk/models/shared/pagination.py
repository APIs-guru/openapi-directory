from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Pagination:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    current_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentUrl') }})
    max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    next_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextUrl') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    page_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNum') }})
    previous_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousUrl') }})
    sort: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPages') }})
    
