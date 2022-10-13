from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import activitycontentdetails
from . import activitysnippet


@dataclass_json
@dataclass
class Activity:
    content_details: Optional[activitycontentdetails.ActivityContentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDetails' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    snippet: Optional[activitysnippet.ActivitySnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    
