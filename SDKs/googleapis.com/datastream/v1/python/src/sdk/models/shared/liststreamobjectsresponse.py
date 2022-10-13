from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import streamobject


@dataclass_json
@dataclass
class ListStreamObjectsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    stream_objects: Optional[List[streamobject.StreamObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamObjects' }})
    
