from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tagvalue


@dataclass_json
@dataclass
class ListTagValuesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tag_values: Optional[List[tagvalue.TagValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagValues' }})
    
