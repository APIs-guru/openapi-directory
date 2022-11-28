from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnum(str, Enum):
    AUDIO_ENCODING_UNSPECIFIED = "AUDIO_ENCODING_UNSPECIFIED"
    AUDIO_ENCODING_LINEAR_16 = "AUDIO_ENCODING_LINEAR_16"
    AUDIO_ENCODING_FLAC = "AUDIO_ENCODING_FLAC"
    AUDIO_ENCODING_MULAW = "AUDIO_ENCODING_MULAW"
    AUDIO_ENCODING_AMR = "AUDIO_ENCODING_AMR"
    AUDIO_ENCODING_AMR_WB = "AUDIO_ENCODING_AMR_WB"
    AUDIO_ENCODING_OGG_OPUS = "AUDIO_ENCODING_OGG_OPUS"
    AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"

class GoogleCloudDialogflowCxV3InputAudioConfigModelVariantEnum(str, Enum):
    SPEECH_MODEL_VARIANT_UNSPECIFIED = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    USE_BEST_AVAILABLE = "USE_BEST_AVAILABLE"
    USE_STANDARD = "USE_STANDARD"
    USE_ENHANCED = "USE_ENHANCED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3InputAudioConfig:
    r"""GoogleCloudDialogflowCxV3InputAudioConfig
    Instructs the speech recognizer on how to process the audio content.
    """
    
    audio_encoding: Optional[GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioEncoding') }})
    enable_word_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableWordInfo') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    model_variant: Optional[GoogleCloudDialogflowCxV3InputAudioConfigModelVariantEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelVariant') }})
    phrase_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseHints') }})
    sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleRateHertz') }})
    single_utterance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleUtterance') }})
    
