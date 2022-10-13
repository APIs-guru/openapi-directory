from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FolderUpdateInput:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_folder_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFolderId' }})
    
