from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import drivefolder
from . import folder
from . import owner


@dataclass_json
@dataclass
class DriveItem:
    drive_file: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveFile' }})
    drive_folder: Optional[drivefolder.DriveFolder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveFolder' }})
    file: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    folder: Optional[folder.Folder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folder' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[owner.Owner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
