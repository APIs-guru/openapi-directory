from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlaylistStatusPrivacyStatusEnum(str, Enum):
    PUBLIC = "public"
    UNLISTED = "unlisted"
    PRIVATE = "private"


@dataclass_json
@dataclass
class PlaylistStatus:
    privacy_status: Optional[PlaylistStatusPrivacyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacyStatus') }})
    
