from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AudioContentTypeTargetingOptionDetailsAudioContentTypeEnum(str, Enum):
    AUDIO_CONTENT_TYPE_UNSPECIFIED = "AUDIO_CONTENT_TYPE_UNSPECIFIED"
    AUDIO_CONTENT_TYPE_UNKNOWN = "AUDIO_CONTENT_TYPE_UNKNOWN"
    AUDIO_CONTENT_TYPE_MUSIC = "AUDIO_CONTENT_TYPE_MUSIC"
    AUDIO_CONTENT_TYPE_BROADCAST = "AUDIO_CONTENT_TYPE_BROADCAST"
    AUDIO_CONTENT_TYPE_PODCAST = "AUDIO_CONTENT_TYPE_PODCAST"


@dataclass_json
@dataclass
class AudioContentTypeTargetingOptionDetails:
    r"""AudioContentTypeTargetingOptionDetails
    Represents a targetable audio content type. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`.
    """
    
    audio_content_type: Optional[AudioContentTypeTargetingOptionDetailsAudioContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioContentType') }})
    
