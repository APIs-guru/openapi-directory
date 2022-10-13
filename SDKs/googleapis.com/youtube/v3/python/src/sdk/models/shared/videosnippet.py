from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import videolocalization
from . import thumbnaildetails

class VideoSnippetLiveBroadcastContentEnum(str, Enum):
    NONE = "none"
    UPCOMING = "upcoming"
    LIVE = "live"
    COMPLETED = "completed"


@dataclass_json
@dataclass
class VideoSnippet:
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    channel_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelTitle' }})
    default_audio_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAudioLanguage' }})
    default_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLanguage' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    live_broadcast_content: Optional[VideoSnippetLiveBroadcastContentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveBroadcastContent' }})
    localized: Optional[videolocalization.VideoLocalization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localized' }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    thumbnails: Optional[thumbnaildetails.ThumbnailDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnails' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
