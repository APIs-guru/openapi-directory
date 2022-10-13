from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import runtimeactionschema


@dataclass_json
@dataclass
class ListRuntimeActionSchemasResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    runtime_action_schemas: Optional[List[runtimeactionschema.RuntimeActionSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeActionSchemas' }})
    
