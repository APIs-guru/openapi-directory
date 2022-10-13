from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FolderInput:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFolderId' }})
    parent_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentPath' }})
    
