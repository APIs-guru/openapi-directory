from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import thumbnaildetails


@dataclass_json
@dataclass
class SubscriptionSubscriberSnippet:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    thumbnails: Optional[thumbnaildetails.ThumbnailDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnails' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
