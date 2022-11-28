from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostActivityActivityTypeEnum(str, Enum):
    CONTENT = "content"


@dataclass_json
@dataclass
class PostActivity:
    activity_type: PostActivityActivityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity_type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    occurred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurred_at') }})
    
