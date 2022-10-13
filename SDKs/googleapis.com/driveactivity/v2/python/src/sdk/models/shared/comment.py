from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assignment
from . import user
from . import post
from . import suggestion


@dataclass_json
@dataclass
class Comment:
    assignment: Optional[assignment.Assignment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignment' }})
    mentioned_users: Optional[List[user.User]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mentionedUsers' }})
    post: Optional[post.Post] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post' }})
    suggestion: Optional[suggestion.Suggestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestion' }})
    
