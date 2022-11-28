from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BlogList:
    blog_user_infos: Optional[List[BlogUserInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blogUserInfos') }})
    items: Optional[List[Blog]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
