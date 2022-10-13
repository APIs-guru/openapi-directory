from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policyrepresentation
from . import resourcerepresentation


@dataclass_json
@dataclass
class ScopeRepresentation:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    icon_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconUri' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    policies: Optional[List[policyrepresentation.PolicyRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    resources: Optional[List[resourcerepresentation.ResourceRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
