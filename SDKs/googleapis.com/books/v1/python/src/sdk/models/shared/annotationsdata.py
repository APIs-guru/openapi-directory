from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import geoannotationdata


@dataclass_json
@dataclass
class Annotationsdata:
    items: Optional[List[geoannotationdata.GeoAnnotationdata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    
