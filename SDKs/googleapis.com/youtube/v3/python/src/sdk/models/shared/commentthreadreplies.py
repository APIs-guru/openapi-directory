from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommentThreadReplies:
    r"""CommentThreadReplies
    Comments written in (direct or indirect) reply to the top level comment.
    """
    
    comments: Optional[List[Comment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    
