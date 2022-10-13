from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import object


@dataclass_json
@dataclass
class ComposeRequestSourceObjectsObjectPreconditions:
    if_generation_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ifGenerationMatch' }})
    

@dataclass_json
@dataclass
class ComposeRequestSourceObjects:
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generation' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    object_preconditions: Optional[ComposeRequestSourceObjectsObjectPreconditions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectPreconditions' }})
    

@dataclass_json
@dataclass
class ComposeRequest:
    destination: Optional[object.Object] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    source_objects: Optional[List[ComposeRequestSourceObjects]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceObjects' }})
    
