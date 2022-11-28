from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SearchResponse:
    r"""SearchResponse
    Response message includes the context and a list of matching results which contain the detail of associated entities.
    """
    
    at_context: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@context') }})
    at_type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@type') }})
    item_list_element: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemListElement') }})
    
