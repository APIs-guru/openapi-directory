from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LiveChatMemberMilestoneChatDetails:
    member_level_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberLevelName') }})
    member_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberMonth') }})
    user_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userComment') }})
    
