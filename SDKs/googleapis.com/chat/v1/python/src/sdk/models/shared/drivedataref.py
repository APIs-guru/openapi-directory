from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DriveDataRef:
    r"""DriveDataRef
    A reference to the data of a drive attachment.
    """
    
    drive_file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveFileId') }})
    
