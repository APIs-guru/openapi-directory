from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Folder:
    resource_folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceFolder' }})
    resource_folder_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceFolderDisplayName' }})
    
