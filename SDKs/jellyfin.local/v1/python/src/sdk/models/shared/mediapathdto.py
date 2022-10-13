from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mediapathinfo


@dataclass_json
@dataclass
class MediaPathDto:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    path_info: Optional[mediapathinfo.MediaPathInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PathInfo' }})
    
