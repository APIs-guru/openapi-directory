from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2outputaudioconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2OutputAudio:
    audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio' }})
    config: Optional[googleclouddialogflowv2outputaudioconfig.GoogleCloudDialogflowV2OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    
