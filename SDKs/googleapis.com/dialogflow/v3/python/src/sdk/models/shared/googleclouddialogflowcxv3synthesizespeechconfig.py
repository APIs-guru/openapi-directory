from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3voiceselectionparams


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3SynthesizeSpeechConfig:
    effects_profile_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectsProfileId' }})
    pitch: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pitch' }})
    speaking_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speakingRate' }})
    voice: Optional[googleclouddialogflowcxv3voiceselectionparams.GoogleCloudDialogflowCxV3VoiceSelectionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice' }})
    volume_gain_db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeGainDb' }})
    
