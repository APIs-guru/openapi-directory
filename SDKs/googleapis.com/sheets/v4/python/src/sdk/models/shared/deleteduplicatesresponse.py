from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteDuplicatesResponse:
    r"""DeleteDuplicatesResponse
    The result of removing duplicates in a range.
    """
    
    duplicates_removed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicatesRemovedCount') }})
    
