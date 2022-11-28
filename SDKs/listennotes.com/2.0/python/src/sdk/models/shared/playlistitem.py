from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PlaylistItemTypeEnum(str, Enum):
    EPISODE = "episode"
    CUSTOM_AUDIO = "custom_audio"
    PODCAST = "podcast"


@dataclass_json
@dataclass
class PlaylistItem:
    r"""PlaylistItem
    An item in a playlist
    """
    
    added_at_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_at_ms') }})
    data: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    type: Optional[PlaylistItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
