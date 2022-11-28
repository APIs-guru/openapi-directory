from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum(str, Enum):
    AUDIO_ENCODING_UNSPECIFIED = "AUDIO_ENCODING_UNSPECIFIED"
    AUDIO_ENCODING_LINEAR_16 = "AUDIO_ENCODING_LINEAR_16"
    AUDIO_ENCODING_FLAC = "AUDIO_ENCODING_FLAC"
    AUDIO_ENCODING_MULAW = "AUDIO_ENCODING_MULAW"
    AUDIO_ENCODING_AMR = "AUDIO_ENCODING_AMR"
    AUDIO_ENCODING_AMR_WB = "AUDIO_ENCODING_AMR_WB"
    AUDIO_ENCODING_OGG_OPUS = "AUDIO_ENCODING_OGG_OPUS"
    AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"

class GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum(str, Enum):
    SPEECH_MODEL_VARIANT_UNSPECIFIED = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    USE_BEST_AVAILABLE = "USE_BEST_AVAILABLE"
    USE_STANDARD = "USE_STANDARD"
    USE_ENHANCED = "USE_ENHANCED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1InputAudioConfig:
    r"""GoogleCloudDialogflowV2beta1InputAudioConfig
    Instructs the speech recognizer on how to process the audio content.
    """
    
    audio_encoding: Optional[GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioEncoding') }})
    disable_no_speech_recognized_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableNoSpeechRecognizedEvent') }})
    enable_word_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableWordInfo') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    model_variant: Optional[GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelVariant') }})
    phrase_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseHints') }})
    sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleRateHertz') }})
    single_utterance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleUtterance') }})
    speech_contexts: Optional[List[GoogleCloudDialogflowV2beta1SpeechContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechContexts') }})
    
