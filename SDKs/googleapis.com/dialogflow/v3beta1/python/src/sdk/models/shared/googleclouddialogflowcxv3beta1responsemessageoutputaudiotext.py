from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText:
    allow_playback_interruption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowPlaybackInterruption' }})
    ssml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssml' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
