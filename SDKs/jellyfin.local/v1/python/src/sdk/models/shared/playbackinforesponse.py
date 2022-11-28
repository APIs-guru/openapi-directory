from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlaybackInfoResponse:
    r"""PlaybackInfoResponse
    Class PlaybackInfoResponse.
    """
    
    error_code: Optional[PlaybackErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    media_sources: Optional[List[MediaSourceInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSources') }})
    play_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlaySessionId') }})
    
