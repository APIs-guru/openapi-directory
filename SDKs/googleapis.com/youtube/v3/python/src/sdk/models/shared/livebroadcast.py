from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import livebroadcastcontentdetails
from . import livebroadcastsnippet
from . import livebroadcaststatistics
from . import livebroadcaststatus


@dataclass_json
@dataclass
class LiveBroadcast:
    content_details: Optional[livebroadcastcontentdetails.LiveBroadcastContentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDetails' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    snippet: Optional[livebroadcastsnippet.LiveBroadcastSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    statistics: Optional[livebroadcaststatistics.LiveBroadcastStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    status: Optional[livebroadcaststatus.LiveBroadcastStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
