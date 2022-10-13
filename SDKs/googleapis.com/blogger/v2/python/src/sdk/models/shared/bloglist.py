from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bloguserinfo
from . import blog


@dataclass_json
@dataclass
class BlogList:
    blog_user_infos: Optional[List[bloguserinfo.BlogUserInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blogUserInfos' }})
    items: Optional[List[blog.Blog]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
