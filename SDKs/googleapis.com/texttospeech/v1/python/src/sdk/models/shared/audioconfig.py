from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AudioConfigAudioEncodingEnum(str, Enum):
    AUDIO_ENCODING_UNSPECIFIED = "AUDIO_ENCODING_UNSPECIFIED"
    LINEAR16 = "LINEAR16"
    MP3 = "MP3"
    OGG_OPUS = "OGG_OPUS"
    MULAW = "MULAW"
    ALAW = "ALAW"


@dataclass_json
@dataclass
class AudioConfig:
    audio_encoding: Optional[AudioConfigAudioEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioEncoding' }})
    effects_profile_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectsProfileId' }})
    pitch: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pitch' }})
    sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleRateHertz' }})
    speaking_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speakingRate' }})
    volume_gain_db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeGainDb' }})
    
