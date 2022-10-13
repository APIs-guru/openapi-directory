from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ChannelStatusLongUploadsStatusEnum(str, Enum):
    LONG_UPLOADS_UNSPECIFIED = "longUploadsUnspecified"
    ALLOWED = "allowed"
    ELIGIBLE = "eligible"
    DISALLOWED = "disallowed"

class ChannelStatusPrivacyStatusEnum(str, Enum):
    PUBLIC = "public"
    UNLISTED = "unlisted"
    PRIVATE = "private"


@dataclass_json
@dataclass
class ChannelStatus:
    is_linked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLinked' }})
    long_uploads_status: Optional[ChannelStatusLongUploadsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longUploadsStatus' }})
    made_for_kids: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'madeForKids' }})
    privacy_status: Optional[ChannelStatusPrivacyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacyStatus' }})
    self_declared_made_for_kids: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfDeclaredMadeForKids' }})
    
