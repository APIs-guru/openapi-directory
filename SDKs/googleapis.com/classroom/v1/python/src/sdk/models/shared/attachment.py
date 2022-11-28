from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Attachment:
    r"""Attachment
    Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.
    """
    
    drive_file: Optional[DriveFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveFile') }})
    form: Optional[Form] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    link: Optional[Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    you_tube_video: Optional[YouTubeVideo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youTubeVideo') }})
    
