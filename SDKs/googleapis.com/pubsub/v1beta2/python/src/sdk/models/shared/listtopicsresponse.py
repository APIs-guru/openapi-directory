from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import topic


@dataclass_json
@dataclass
class ListTopicsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    topics: Optional[List[topic.Topic]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    
