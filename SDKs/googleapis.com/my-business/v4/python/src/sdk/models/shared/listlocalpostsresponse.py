from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import localpost


@dataclass_json
@dataclass
class ListLocalPostsResponse:
    local_posts: Optional[List[localpost.LocalPost]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localPosts' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
