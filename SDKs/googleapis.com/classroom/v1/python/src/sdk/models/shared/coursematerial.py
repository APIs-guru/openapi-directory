from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import drivefile
from . import form
from . import link
from . import youtubevideo


@dataclass_json
@dataclass
class CourseMaterial:
    drive_file: Optional[drivefile.DriveFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveFile' }})
    form: Optional[form.Form] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form' }})
    link: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    you_tube_video: Optional[youtubevideo.YouTubeVideo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'youTubeVideo' }})
    
