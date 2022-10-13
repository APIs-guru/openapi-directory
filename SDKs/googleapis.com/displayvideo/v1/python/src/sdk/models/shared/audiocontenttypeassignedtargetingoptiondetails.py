from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum(str, Enum):
    AUDIO_CONTENT_TYPE_UNSPECIFIED = "AUDIO_CONTENT_TYPE_UNSPECIFIED"
    AUDIO_CONTENT_TYPE_UNKNOWN = "AUDIO_CONTENT_TYPE_UNKNOWN"
    AUDIO_CONTENT_TYPE_MUSIC = "AUDIO_CONTENT_TYPE_MUSIC"
    AUDIO_CONTENT_TYPE_BROADCAST = "AUDIO_CONTENT_TYPE_BROADCAST"
    AUDIO_CONTENT_TYPE_PODCAST = "AUDIO_CONTENT_TYPE_PODCAST"


@dataclass_json
@dataclass
class AudioContentTypeAssignedTargetingOptionDetails:
    audio_content_type: Optional[AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioContentType' }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingOptionId' }})
    
