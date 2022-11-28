from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum(str, Enum):
    AUDIO_CONTENT_TYPE_UNSPECIFIED = "AUDIO_CONTENT_TYPE_UNSPECIFIED"
    AUDIO_CONTENT_TYPE_UNKNOWN = "AUDIO_CONTENT_TYPE_UNKNOWN"
    AUDIO_CONTENT_TYPE_MUSIC = "AUDIO_CONTENT_TYPE_MUSIC"
    AUDIO_CONTENT_TYPE_BROADCAST = "AUDIO_CONTENT_TYPE_BROADCAST"
    AUDIO_CONTENT_TYPE_PODCAST = "AUDIO_CONTENT_TYPE_PODCAST"


@dataclass_json
@dataclass
class AudioContentTypeAssignedTargetingOptionDetails:
    r"""AudioContentTypeAssignedTargetingOptionDetails
    Details for audio content type assigned targeting option. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. Explicitly targeting all options is not supported. Remove all audio content type targeting options to achieve this effect.
    """
    
    audio_content_type: Optional[AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioContentType') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
