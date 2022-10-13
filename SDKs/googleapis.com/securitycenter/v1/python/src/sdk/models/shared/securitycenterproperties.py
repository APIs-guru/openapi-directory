from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import folder


@dataclass_json
@dataclass
class SecurityCenterProperties:
    folders: Optional[List[folder.Folder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folders' }})
    resource_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceDisplayName' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    resource_owners: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceOwners' }})
    resource_parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceParent' }})
    resource_parent_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceParentDisplayName' }})
    resource_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceProject' }})
    resource_project_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceProjectDisplayName' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
