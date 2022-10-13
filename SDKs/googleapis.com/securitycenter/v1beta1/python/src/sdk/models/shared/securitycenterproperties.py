from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SecurityCenterProperties:
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    resource_owners: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceOwners' }})
    resource_parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceParent' }})
    resource_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceProject' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
