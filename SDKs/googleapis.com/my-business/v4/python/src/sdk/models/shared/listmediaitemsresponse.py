from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mediaitem


@dataclass_json
@dataclass
class ListMediaItemsResponse:
    media_items: Optional[List[mediaitem.MediaItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaItems' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_media_item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalMediaItemCount' }})
    
