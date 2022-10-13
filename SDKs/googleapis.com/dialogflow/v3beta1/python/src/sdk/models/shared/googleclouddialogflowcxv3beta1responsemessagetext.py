from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessageText:
    allow_playback_interruption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowPlaybackInterruption' }})
    text: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
