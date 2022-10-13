from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import livestream
from . import pageinfo


@dataclass_json
@dataclass
class LiveStreamListResponse:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    items: Optional[List[livestream.LiveStream]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    page_info: Optional[pageinfo.PageInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageInfo' }})
    prev_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prevPageToken' }})
    token_pagination: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenPagination' }})
    visitor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visitorId' }})
    
