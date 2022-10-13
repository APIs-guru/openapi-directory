from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import member

class PostActivityWithMemberActivityTypeEnum(str, Enum):
    CONTENT = "content"


@dataclass_json
@dataclass
class PostActivityWithMember:
    activity_type: PostActivityWithMemberActivityTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity_type' }})
    member: Optional[member.Member] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    occurred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occurred_at' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
