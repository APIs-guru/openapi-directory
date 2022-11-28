from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PaginationData:
    r"""PaginationData
    Page containing results.
    """
    
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    total_elements: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalElements') }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPages') }})
    
