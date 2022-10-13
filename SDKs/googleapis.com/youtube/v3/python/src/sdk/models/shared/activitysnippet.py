from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import thumbnaildetails

class ActivitySnippetTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "typeUnspecified"
    UPLOAD = "upload"
    LIKE = "like"
    FAVORITE = "favorite"
    COMMENT = "comment"
    SUBSCRIPTION = "subscription"
    PLAYLIST_ITEM = "playlistItem"
    RECOMMENDATION = "recommendation"
    BULLETIN = "bulletin"
    SOCIAL = "social"
    CHANNEL_ITEM = "channelItem"
    PROMOTED_ITEM = "promotedItem"


@dataclass_json
@dataclass
class ActivitySnippet:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    channel_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelTitle' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    thumbnails: Optional[thumbnaildetails.ThumbnailDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnails' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[ActivitySnippetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
