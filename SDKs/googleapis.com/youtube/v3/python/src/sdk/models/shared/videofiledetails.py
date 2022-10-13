from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import videofiledetailsaudiostream
from . import videofiledetailsvideostream

class VideoFileDetailsFileTypeEnum(str, Enum):
    VIDEO = "video"
    AUDIO = "audio"
    IMAGE = "image"
    ARCHIVE = "archive"
    DOCUMENT = "document"
    PROJECT = "project"
    OTHER = "other"


@dataclass_json
@dataclass
class VideoFileDetails:
    audio_streams: Optional[List[videofiledetailsaudiostream.VideoFileDetailsAudioStream]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioStreams' }})
    bitrate_bps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitrateBps' }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    duration_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationMs' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    file_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSize' }})
    file_type: Optional[VideoFileDetailsFileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    video_streams: Optional[List[videofiledetailsvideostream.VideoFileDetailsVideoStream]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoStreams' }})
    
