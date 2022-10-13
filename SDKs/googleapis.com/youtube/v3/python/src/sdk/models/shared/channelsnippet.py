from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import channellocalization
from . import thumbnaildetails


@dataclass_json
@dataclass
class ChannelSnippet:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    custom_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customUrl' }})
    default_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLanguage' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    localized: Optional[channellocalization.ChannelLocalization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localized' }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    thumbnails: Optional[thumbnaildetails.ThumbnailDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnails' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
