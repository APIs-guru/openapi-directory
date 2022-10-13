from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import runtimeentityschema


@dataclass_json
@dataclass
class ListRuntimeEntitySchemasResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    runtime_entity_schemas: Optional[List[runtimeentityschema.RuntimeEntitySchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeEntitySchemas' }})
    
