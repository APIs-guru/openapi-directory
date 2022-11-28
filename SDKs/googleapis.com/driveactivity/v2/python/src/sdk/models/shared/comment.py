from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Comment:
    r"""Comment
    A change about comments on an object.
    """
    
    assignment: Optional[Assignment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignment') }})
    mentioned_users: Optional[List[User]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mentionedUsers') }})
    post: Optional[Post] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post') }})
    suggestion: Optional[Suggestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestion') }})
    
