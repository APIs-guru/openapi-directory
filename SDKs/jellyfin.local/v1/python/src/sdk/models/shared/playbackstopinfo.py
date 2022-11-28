from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlaybackStopInfoInput:
    r"""PlaybackStopInfoInput
    Class PlaybackStopInfo.
    """
    
    failed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Failed') }})
    item: Optional[BaseItemDtoInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemId') }})
    live_stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LiveStreamId') }})
    media_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSourceId') }})
    next_media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMediaType') }})
    now_playing_queue: Optional[List[QueueItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NowPlayingQueue') }})
    play_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlaySessionId') }})
    playlist_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlaylistItemId') }})
    position_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PositionTicks') }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionId') }})
    
