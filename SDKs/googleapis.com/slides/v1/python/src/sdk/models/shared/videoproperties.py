from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import outline


@dataclass_json
@dataclass
class VideoProperties:
    auto_play: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoPlay' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    mute: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mute' }})
    outline: Optional[outline.Outline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outline' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
