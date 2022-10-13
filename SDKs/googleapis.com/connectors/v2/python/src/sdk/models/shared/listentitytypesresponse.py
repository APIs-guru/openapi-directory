from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entitytype


@dataclass_json
@dataclass
class ListEntityTypesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    types: Optional[List[entitytype.EntityType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    unsupported_type_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unsupportedTypeNames' }})
    
