from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import folder


@dataclass_json
@dataclass
class Resource:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    folders: Optional[List[folder.Folder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folders' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentDisplayName' }})
    parent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentName' }})
    project_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectDisplayName' }})
    project_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectName' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
