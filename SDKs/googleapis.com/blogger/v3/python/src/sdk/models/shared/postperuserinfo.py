from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPerUserInfo:
    blog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blogId' }})
    has_edit_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasEditAccess' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    post_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postId' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
