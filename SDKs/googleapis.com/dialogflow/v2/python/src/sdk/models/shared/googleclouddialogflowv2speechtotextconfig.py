from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum(str, Enum):
    SPEECH_MODEL_VARIANT_UNSPECIFIED = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    USE_BEST_AVAILABLE = "USE_BEST_AVAILABLE"
    USE_STANDARD = "USE_STANDARD"
    USE_ENHANCED = "USE_ENHANCED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SpeechToTextConfig:
    r"""GoogleCloudDialogflowV2SpeechToTextConfig
    Configures speech transcription for ConversationProfile.
    """
    
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    speech_model_variant: Optional[GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechModelVariant') }})
    
