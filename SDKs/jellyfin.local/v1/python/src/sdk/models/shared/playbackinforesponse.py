from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import playbackerrorcode_enum
from . import mediasourceinfo


@dataclass_json
@dataclass
class PlaybackInfoResponse:
    error_code: Optional[playbackerrorcode_enum.PlaybackErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    media_sources: Optional[List[mediasourceinfo.MediaSourceInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaSources' }})
    play_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlaySessionId' }})
    
