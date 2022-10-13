from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logview


@dataclass_json
@dataclass
class ListViewsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    views: Optional[List[logview.LogView]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'views' }})
    
