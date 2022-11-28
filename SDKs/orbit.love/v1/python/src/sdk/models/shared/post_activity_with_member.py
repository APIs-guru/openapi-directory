from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PostActivityWithMemberActivityTypeEnum(str, Enum):
    CONTENT = "content"


@dataclass_json
@dataclass
class PostActivityWithMember:
    activity_type: PostActivityWithMemberActivityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity_type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    member: Optional[Member] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    occurred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurred_at') }})
    
