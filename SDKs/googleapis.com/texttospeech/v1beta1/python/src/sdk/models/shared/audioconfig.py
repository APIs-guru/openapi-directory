from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AudioConfigAudioEncodingEnum(str, Enum):
    AUDIO_ENCODING_UNSPECIFIED = "AUDIO_ENCODING_UNSPECIFIED"
    LINEAR16 = "LINEAR16"
    MP3 = "MP3"
    MP3_64_KBPS = "MP3_64_KBPS"
    OGG_OPUS = "OGG_OPUS"
    MULAW = "MULAW"
    ALAW = "ALAW"


@dataclass_json
@dataclass
class AudioConfig:
    r"""AudioConfig
    Description of audio data to be synthesized.
    """
    
    audio_encoding: Optional[AudioConfigAudioEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioEncoding') }})
    effects_profile_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectsProfileId') }})
    pitch: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitch') }})
    sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleRateHertz') }})
    speaking_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speakingRate') }})
    volume_gain_db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeGainDb') }})
    
