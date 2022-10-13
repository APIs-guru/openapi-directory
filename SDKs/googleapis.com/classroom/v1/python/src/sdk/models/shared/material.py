from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import shareddrivefile
from . import form
from . import link
from . import youtubevideo


@dataclass_json
@dataclass
class Material:
    drive_file: Optional[shareddrivefile.SharedDriveFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveFile' }})
    form: Optional[form.Form] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form' }})
    link: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    youtube_video: Optional[youtubevideo.YouTubeVideo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'youtubeVideo' }})
    
