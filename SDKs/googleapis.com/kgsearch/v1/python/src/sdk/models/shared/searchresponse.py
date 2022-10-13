from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SearchResponse:
    at_context: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@context' }})
    at_type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@type' }})
    item_list_element: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemListElement' }})
    
