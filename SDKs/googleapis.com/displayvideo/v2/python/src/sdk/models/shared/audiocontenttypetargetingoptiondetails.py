from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AudioContentTypeTargetingOptionDetailsAudioContentTypeEnum(str, Enum):
    AUDIO_CONTENT_TYPE_UNSPECIFIED = "AUDIO_CONTENT_TYPE_UNSPECIFIED"
    AUDIO_CONTENT_TYPE_UNKNOWN = "AUDIO_CONTENT_TYPE_UNKNOWN"
    AUDIO_CONTENT_TYPE_MUSIC = "AUDIO_CONTENT_TYPE_MUSIC"
    AUDIO_CONTENT_TYPE_BROADCAST = "AUDIO_CONTENT_TYPE_BROADCAST"
    AUDIO_CONTENT_TYPE_PODCAST = "AUDIO_CONTENT_TYPE_PODCAST"


@dataclass_json
@dataclass
class AudioContentTypeTargetingOptionDetails:
    audio_content_type: Optional[AudioContentTypeTargetingOptionDetailsAudioContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioContentType' }})
    
