from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LiveChatMembershipGiftingDetails:
    gift_memberships_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('giftMembershipsCount') }})
    gift_memberships_level_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('giftMembershipsLevelName') }})
    
