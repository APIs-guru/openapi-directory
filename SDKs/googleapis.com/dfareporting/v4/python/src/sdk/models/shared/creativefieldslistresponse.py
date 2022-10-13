from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import creativefield


@dataclass_json
@dataclass
class CreativeFieldsListResponse:
    creative_fields: Optional[List[creativefield.CreativeField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeFields' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
