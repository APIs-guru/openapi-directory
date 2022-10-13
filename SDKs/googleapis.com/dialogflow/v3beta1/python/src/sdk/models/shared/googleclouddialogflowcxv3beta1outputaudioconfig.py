from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1synthesizespeechconfig

class GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum(str, Enum):
    OUTPUT_AUDIO_ENCODING_UNSPECIFIED = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
    OUTPUT_AUDIO_ENCODING_LINEAR_16 = "OUTPUT_AUDIO_ENCODING_LINEAR_16"
    OUTPUT_AUDIO_ENCODING_MP3 = "OUTPUT_AUDIO_ENCODING_MP3"
    OUTPUT_AUDIO_ENCODING_MP3_64_KBPS = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
    OUTPUT_AUDIO_ENCODING_OGG_OPUS = "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
    OUTPUT_AUDIO_ENCODING_MULAW = "OUTPUT_AUDIO_ENCODING_MULAW"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1OutputAudioConfig:
    audio_encoding: Optional[GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioEncoding' }})
    sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleRateHertz' }})
    synthesize_speech_config: Optional[googleclouddialogflowcxv3beta1synthesizespeechconfig.GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'synthesizeSpeechConfig' }})
    
