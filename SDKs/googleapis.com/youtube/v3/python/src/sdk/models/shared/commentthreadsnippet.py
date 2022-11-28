from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommentThreadSnippet:
    r"""CommentThreadSnippet
    Basic details about a comment thread.
    """
    
    can_reply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canReply') }})
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPublic') }})
    top_level_comment: Optional[Comment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topLevelComment') }})
    total_reply_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalReplyCount') }})
    video_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoId') }})
    
