from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namespace


@dataclass_json
@dataclass
class ListNamespacesResponse:
    namespaces: Optional[List[namespace.Namespace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaces' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
