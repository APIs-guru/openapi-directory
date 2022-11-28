from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnum(str, Enum):
    SSML_VOICE_GENDER_UNSPECIFIED = "SSML_VOICE_GENDER_UNSPECIFIED"
    SSML_VOICE_GENDER_MALE = "SSML_VOICE_GENDER_MALE"
    SSML_VOICE_GENDER_FEMALE = "SSML_VOICE_GENDER_FEMALE"
    SSML_VOICE_GENDER_NEUTRAL = "SSML_VOICE_GENDER_NEUTRAL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3VoiceSelectionParams:
    r"""GoogleCloudDialogflowCxV3VoiceSelectionParams
    Description of which voice to use for speech synthesis.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ssml_gender: Optional[GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssmlGender') }})
    
