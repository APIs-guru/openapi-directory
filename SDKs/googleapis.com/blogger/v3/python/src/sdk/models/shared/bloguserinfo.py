from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import blog
from . import blogperuserinfo


@dataclass_json
@dataclass
class BlogUserInfo:
    blog: Optional[blog.Blog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blog' }})
    blog_user_info: Optional[blogperuserinfo.BlogPerUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blog_user_info' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
