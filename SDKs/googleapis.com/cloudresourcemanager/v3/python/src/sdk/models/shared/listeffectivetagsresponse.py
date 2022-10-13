from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import effectivetag


@dataclass_json
@dataclass
class ListEffectiveTagsResponse:
    effective_tags: Optional[List[effectivetag.EffectiveTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveTags' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
