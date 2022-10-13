from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import post
from . import postperuserinfo


@dataclass_json
@dataclass
class PostUserInfo:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    post: Optional[post.Post] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post' }})
    post_user_info: Optional[postperuserinfo.PostPerUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_user_info' }})
    
