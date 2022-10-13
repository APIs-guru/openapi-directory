from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2voiceselectionparams


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SynthesizeSpeechConfig:
    effects_profile_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectsProfileId' }})
    pitch: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pitch' }})
    speaking_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speakingRate' }})
    voice: Optional[googleclouddialogflowv2voiceselectionparams.GoogleCloudDialogflowV2VoiceSelectionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice' }})
    volume_gain_db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeGainDb' }})
    
