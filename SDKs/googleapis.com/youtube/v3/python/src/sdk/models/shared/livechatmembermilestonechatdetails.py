from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LiveChatMemberMilestoneChatDetails:
    member_level_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberLevelName' }})
    member_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberMonth' }})
    user_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userComment' }})
    
