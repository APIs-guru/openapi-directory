from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2beta1TextToSpeechSettingsOutputAudioEncodingEnum(str, Enum):
    OUTPUT_AUDIO_ENCODING_UNSPECIFIED = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
    OUTPUT_AUDIO_ENCODING_LINEAR_16 = "OUTPUT_AUDIO_ENCODING_LINEAR_16"
    OUTPUT_AUDIO_ENCODING_MP3 = "OUTPUT_AUDIO_ENCODING_MP3"
    OUTPUT_AUDIO_ENCODING_MP3_64_KBPS = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
    OUTPUT_AUDIO_ENCODING_OGG_OPUS = "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
    OUTPUT_AUDIO_ENCODING_MULAW = "OUTPUT_AUDIO_ENCODING_MULAW"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1TextToSpeechSettings:
    r"""GoogleCloudDialogflowV2beta1TextToSpeechSettings
    Instructs the speech synthesizer on how to generate the output audio content.
    """
    
    enable_text_to_speech: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableTextToSpeech') }})
    output_audio_encoding: Optional[GoogleCloudDialogflowV2beta1TextToSpeechSettingsOutputAudioEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudioEncoding') }})
    sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleRateHertz') }})
    synthesize_speech_configs: Optional[dict[str, GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synthesizeSpeechConfigs') }})
    
