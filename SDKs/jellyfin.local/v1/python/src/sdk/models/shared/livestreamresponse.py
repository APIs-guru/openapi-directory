from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mediasourceinfo


@dataclass_json
@dataclass
class LiveStreamResponse:
    media_source: Optional[mediasourceinfo.MediaSourceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaSource' }})
    
