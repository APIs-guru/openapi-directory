from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StageReferenceSearchResult:
    items: Optional[List[StageReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    items_per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemsPerPage') }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    
