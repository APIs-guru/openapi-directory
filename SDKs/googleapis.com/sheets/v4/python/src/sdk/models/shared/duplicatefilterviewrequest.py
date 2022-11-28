from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DuplicateFilterViewRequest:
    r"""DuplicateFilterViewRequest
    Duplicates a particular filter view.
    """
    
    filter_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterId') }})
    
