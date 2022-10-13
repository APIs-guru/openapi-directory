from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventtag


@dataclass_json
@dataclass
class EventTagsListResponse:
    event_tags: Optional[List[eventtag.EventTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTags' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
