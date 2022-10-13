from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tagbinding


@dataclass_json
@dataclass
class ListTagBindingsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tag_bindings: Optional[List[tagbinding.TagBinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagBindings' }})
    
