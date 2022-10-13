from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum(str, Enum):
    SPEECH_MODEL_VARIANT_UNSPECIFIED = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    USE_BEST_AVAILABLE = "USE_BEST_AVAILABLE"
    USE_STANDARD = "USE_STANDARD"
    USE_ENHANCED = "USE_ENHANCED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SpeechToTextConfig:
    speech_model_variant: Optional[GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speechModelVariant' }})
    
