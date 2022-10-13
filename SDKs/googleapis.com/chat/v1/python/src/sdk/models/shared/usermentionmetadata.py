from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import user

class UserMentionMetadataTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    ADD = "ADD"
    MENTION = "MENTION"


@dataclass_json
@dataclass
class UserMentionMetadata:
    type: Optional[UserMentionMetadataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
