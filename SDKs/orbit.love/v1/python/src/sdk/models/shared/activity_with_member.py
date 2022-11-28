from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActivityWithMember:
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    activity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity_type') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    link_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_text') }})
    member: Optional[Member] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    occurred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurred_at') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    weight: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
