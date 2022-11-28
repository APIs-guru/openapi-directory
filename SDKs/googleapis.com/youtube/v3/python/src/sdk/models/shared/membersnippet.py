from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MemberSnippet:
    creator_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorChannelId') }})
    member_details: Optional[ChannelProfileDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberDetails') }})
    memberships_details: Optional[MembershipsDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipsDetails') }})
    
