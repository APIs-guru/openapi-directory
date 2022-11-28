from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListLocalPostsResponse:
    r"""ListLocalPostsResponse
    Response message for ListLocalPosts
    """
    
    local_posts: Optional[List[LocalPost]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPosts') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
