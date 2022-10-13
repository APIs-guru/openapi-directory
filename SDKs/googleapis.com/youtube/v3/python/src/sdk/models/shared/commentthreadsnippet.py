from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import comment


@dataclass_json
@dataclass
class CommentThreadSnippet:
    can_reply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canReply' }})
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPublic' }})
    top_level_comment: Optional[comment.Comment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topLevelComment' }})
    total_reply_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalReplyCount' }})
    video_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoId' }})
    
