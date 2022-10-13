from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PlaylistStatusPrivacyStatusEnum(str, Enum):
    PUBLIC = "public"
    UNLISTED = "unlisted"
    PRIVATE = "private"


@dataclass_json
@dataclass
class PlaylistStatus:
    privacy_status: Optional[PlaylistStatusPrivacyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacyStatus' }})
    
