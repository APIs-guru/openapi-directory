from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BlogUserInfo:
    blog: Optional[Blog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blog') }})
    blog_user_info: Optional[BlogPerUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blog_user_info') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
