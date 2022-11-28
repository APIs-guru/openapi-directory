from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlaylistItemStatusPrivacyStatusEnum(str, Enum):
    PUBLIC = "public"
    UNLISTED = "unlisted"
    PRIVATE = "private"


@dataclass_json
@dataclass
class PlaylistItemStatus:
    r"""PlaylistItemStatus
    Information about the playlist item's privacy status.
    """
    
    privacy_status: Optional[PlaylistItemStatusPrivacyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacyStatus') }})
    
