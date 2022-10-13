from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import commentsnippetauthorchannelid

class CommentSnippetModerationStatusEnum(str, Enum):
    PUBLISHED = "published"
    HELD_FOR_REVIEW = "heldForReview"
    LIKELY_SPAM = "likelySpam"
    REJECTED = "rejected"

class CommentSnippetViewerRatingEnum(str, Enum):
    NONE = "none"
    LIKE = "like"
    DISLIKE = "dislike"


@dataclass_json
@dataclass
class CommentSnippet:
    author_channel_id: Optional[commentsnippetauthorchannelid.CommentSnippetAuthorChannelID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorChannelId' }})
    author_channel_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorChannelUrl' }})
    author_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorDisplayName' }})
    author_profile_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorProfileImageUrl' }})
    can_rate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canRate' }})
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    like_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likeCount' }})
    moderation_status: Optional[CommentSnippetModerationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderationStatus' }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    text_display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textDisplay' }})
    text_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textOriginal' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    video_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoId' }})
    viewer_rating: Optional[CommentSnippetViewerRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewerRating' }})
    
