from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourceid
from . import thumbnaildetails


@dataclass_json
@dataclass
class SubscriptionSnippet:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    channel_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelTitle' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_id: Optional[resourceid.ResourceID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    thumbnails: Optional[thumbnaildetails.ThumbnailDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnails' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
