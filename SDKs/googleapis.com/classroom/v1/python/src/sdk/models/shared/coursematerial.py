from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CourseMaterial:
    r"""CourseMaterial
    A material attached to a course as part of a material set.
    """
    
    drive_file: Optional[DriveFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveFile') }})
    form: Optional[Form] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    link: Optional[Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    you_tube_video: Optional[YouTubeVideo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youTubeVideo') }})
    
