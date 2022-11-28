from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GroupContentDetails:
    r"""GroupContentDetails
    A group's content details.
    """
    
    item_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemCount') }})
    item_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemType') }})
    
