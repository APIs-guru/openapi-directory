from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum(str, Enum):
    OUTPUT_AUDIO_ENCODING_UNSPECIFIED = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
    OUTPUT_AUDIO_ENCODING_LINEAR_16 = "OUTPUT_AUDIO_ENCODING_LINEAR_16"
    OUTPUT_AUDIO_ENCODING_MP3 = "OUTPUT_AUDIO_ENCODING_MP3"
    OUTPUT_AUDIO_ENCODING_MP3_64_KBPS = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
    OUTPUT_AUDIO_ENCODING_OGG_OPUS = "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
    OUTPUT_AUDIO_ENCODING_MULAW = "OUTPUT_AUDIO_ENCODING_MULAW"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2OutputAudioConfig:
    r"""GoogleCloudDialogflowV2OutputAudioConfig
    Instructs the speech synthesizer on how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.
    """
    
    audio_encoding: Optional[GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioEncoding') }})
    sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleRateHertz') }})
    synthesize_speech_config: Optional[GoogleCloudDialogflowV2SynthesizeSpeechConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synthesizeSpeechConfig') }})
    
