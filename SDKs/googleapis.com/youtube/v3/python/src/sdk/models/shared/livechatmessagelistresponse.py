from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import livechatmessage
from . import pageinfo


@dataclass_json
@dataclass
class LiveChatMessageListResponse:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    items: Optional[List[livechatmessage.LiveChatMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    offline_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offlineAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    page_info: Optional[pageinfo.PageInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageInfo' }})
    polling_interval_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pollingIntervalMillis' }})
    token_pagination: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenPagination' }})
    visitor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visitorId' }})
    
