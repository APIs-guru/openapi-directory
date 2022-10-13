from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tagkey


@dataclass_json
@dataclass
class ListTagKeysResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tag_keys: Optional[List[tagkey.TagKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagKeys' }})
    
