from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectdefinition


@dataclass_json
@dataclass
class Schema:
    object_definitions: Optional[List[objectdefinition.ObjectDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectDefinitions' }})
    operation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationIds' }})
    
