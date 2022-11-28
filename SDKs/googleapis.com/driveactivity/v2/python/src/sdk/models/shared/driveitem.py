from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DriveItem:
    r"""DriveItem
    A Drive item, such as a file or folder.
    """
    
    drive_file: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveFile') }})
    drive_folder: Optional[DriveFolder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveFolder') }})
    file: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    folder: Optional[Folder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folder') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[Owner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
