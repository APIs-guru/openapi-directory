from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1VideoPayload:
    r"""GoogleCloudDatalabelingV1beta1VideoPayload
    Container of information of a video.
    """
    
    frame_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameRate') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    signed_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signedUri') }})
    video_thumbnails: Optional[List[GoogleCloudDatalabelingV1beta1VideoThumbnail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoThumbnails') }})
    video_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoUri') }})
    
