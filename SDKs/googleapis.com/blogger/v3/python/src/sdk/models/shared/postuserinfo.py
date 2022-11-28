from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PostUserInfo:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    post: Optional[Post] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post') }})
    post_user_info: Optional[PostPerUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_user_info') }})
    
