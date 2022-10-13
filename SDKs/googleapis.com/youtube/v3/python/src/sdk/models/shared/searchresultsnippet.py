from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import thumbnaildetails

class SearchResultSnippetLiveBroadcastContentEnum(str, Enum):
    NONE = "none"
    UPCOMING = "upcoming"
    LIVE = "live"
    COMPLETED = "completed"


@dataclass_json
@dataclass
class SearchResultSnippet:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    channel_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelTitle' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    live_broadcast_content: Optional[SearchResultSnippetLiveBroadcastContentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveBroadcastContent' }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    thumbnails: Optional[thumbnaildetails.ThumbnailDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnails' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
