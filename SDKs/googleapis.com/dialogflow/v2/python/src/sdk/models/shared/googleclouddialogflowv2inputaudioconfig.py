from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2speechcontext

class GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum(str, Enum):
    AUDIO_ENCODING_UNSPECIFIED = "AUDIO_ENCODING_UNSPECIFIED"
    AUDIO_ENCODING_LINEAR_16 = "AUDIO_ENCODING_LINEAR_16"
    AUDIO_ENCODING_FLAC = "AUDIO_ENCODING_FLAC"
    AUDIO_ENCODING_MULAW = "AUDIO_ENCODING_MULAW"
    AUDIO_ENCODING_AMR = "AUDIO_ENCODING_AMR"
    AUDIO_ENCODING_AMR_WB = "AUDIO_ENCODING_AMR_WB"
    AUDIO_ENCODING_OGG_OPUS = "AUDIO_ENCODING_OGG_OPUS"
    AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"

class GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum(str, Enum):
    SPEECH_MODEL_VARIANT_UNSPECIFIED = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    USE_BEST_AVAILABLE = "USE_BEST_AVAILABLE"
    USE_STANDARD = "USE_STANDARD"
    USE_ENHANCED = "USE_ENHANCED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2InputAudioConfig:
    audio_encoding: Optional[GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioEncoding' }})
    disable_no_speech_recognized_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableNoSpeechRecognizedEvent' }})
    enable_word_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableWordInfo' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    model_variant: Optional[GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelVariant' }})
    phrase_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phraseHints' }})
    sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleRateHertz' }})
    single_utterance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'singleUtterance' }})
    speech_contexts: Optional[List[googleclouddialogflowv2speechcontext.GoogleCloudDialogflowV2SpeechContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speechContexts' }})
    
