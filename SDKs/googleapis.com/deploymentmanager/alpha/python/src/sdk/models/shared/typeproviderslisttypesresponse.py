from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import typeinfo


@dataclass_json
@dataclass
class TypeProvidersListTypesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    types: Optional[List[typeinfo.TypeInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    
