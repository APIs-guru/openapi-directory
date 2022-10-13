from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import drivefolder
from . import folder


@dataclass_json
@dataclass
class DriveItemReference:
    drive_file: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveFile' }})
    drive_folder: Optional[drivefolder.DriveFolder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveFolder' }})
    file: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    folder: Optional[folder.Folder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folder' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
