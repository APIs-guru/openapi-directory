from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MediaFileMimeTypeEnum(str, Enum):
    VIDEO_MIME_TYPE_UNSPECIFIED = "VIDEO_MIME_TYPE_UNSPECIFIED"
    MIME_VIDEO_XFLV = "MIME_VIDEO_XFLV"
    MIME_VIDEO_WEBM = "MIME_VIDEO_WEBM"
    MIME_VIDEO_MP4 = "MIME_VIDEO_MP4"
    MIME_VIDEO_OGG = "MIME_VIDEO_OGG"
    MIME_VIDEO_YT_HOSTED = "MIME_VIDEO_YT_HOSTED"
    MIME_VIDEO_X_MS_WMV = "MIME_VIDEO_X_MS_WMV"
    MIME_VIDEO_3_GPP = "MIME_VIDEO_3GPP"
    MIME_VIDEO_MOV = "MIME_VIDEO_MOV"
    MIME_APPLICATION_SWF = "MIME_APPLICATION_SWF"
    MIME_APPLICATION_SURVEY = "MIME_APPLICATION_SURVEY"
    MIME_APPLICATION_JAVASCRIPT = "MIME_APPLICATION_JAVASCRIPT"
    MIME_APPLICATION_SILVERLIGHT = "MIME_APPLICATION_SILVERLIGHT"
    MIME_APPLICATION_MPEGURL = "MIME_APPLICATION_MPEGURL"
    MIME_APPLICATION_MPEGDASH = "MIME_APPLICATION_MPEGDASH"
    MIME_AUDIO_MP4_A = "MIME_AUDIO_MP4A"
    MIME_AUDIO_MP3 = "MIME_AUDIO_MP3"
    MIME_AUDIO_OGG = "MIME_AUDIO_OGG"


@dataclass_json
@dataclass
class MediaFile:
    bitrate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitrate' }})
    mime_type: Optional[MediaFileMimeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    
