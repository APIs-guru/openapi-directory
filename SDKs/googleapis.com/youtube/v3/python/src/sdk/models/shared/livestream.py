from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cdnsettings
from . import livestreamcontentdetails
from . import livestreamsnippet
from . import livestreamstatus


@dataclass_json
@dataclass
class LiveStream:
    cdn: Optional[cdnsettings.CdnSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cdn' }})
    content_details: Optional[livestreamcontentdetails.LiveStreamContentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDetails' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    snippet: Optional[livestreamsnippet.LiveStreamSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    status: Optional[livestreamstatus.LiveStreamStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
