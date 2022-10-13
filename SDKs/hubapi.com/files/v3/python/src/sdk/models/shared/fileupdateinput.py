from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FileUpdateInputAccessEnum(str, Enum):
    PUBLIC_INDEXABLE = "PUBLIC_INDEXABLE"
    PUBLIC_NOT_INDEXABLE = "PUBLIC_NOT_INDEXABLE"
    HIDDEN_INDEXABLE = "HIDDEN_INDEXABLE"
    HIDDEN_NOT_INDEXABLE = "HIDDEN_NOT_INDEXABLE"
    HIDDEN_PRIVATE = "HIDDEN_PRIVATE"
    PRIVATE = "PRIVATE"


@dataclass_json
@dataclass
class FileUpdateInput:
    access: Optional[FileUpdateInputAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    is_usable_in_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUsableInContent' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFolderId' }})
    parent_folder_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFolderPath' }})
    
