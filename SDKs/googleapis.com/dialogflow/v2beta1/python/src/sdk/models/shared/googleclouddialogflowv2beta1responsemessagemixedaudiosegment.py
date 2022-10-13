from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment:
    allow_playback_interruption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowPlaybackInterruption' }})
    audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
