from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schema


@dataclass_json
@dataclass
class ListSchemasResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    schemas: Optional[List[schema.Schema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    
