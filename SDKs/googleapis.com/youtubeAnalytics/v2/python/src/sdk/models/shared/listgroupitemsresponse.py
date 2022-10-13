from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errors
from . import groupitem


@dataclass_json
@dataclass
class ListGroupItemsResponse:
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    items: Optional[List[groupitem.GroupItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
