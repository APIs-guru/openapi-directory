from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommentThread:
    r"""CommentThread
    A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
    """
    
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    replies: Optional[CommentThreadReplies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    snippet: Optional[CommentThreadSnippet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    
