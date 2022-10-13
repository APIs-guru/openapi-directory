from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import feed


@dataclass_json
@dataclass
class ListFeedsResponse:
    feeds: Optional[List[feed.Feed]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feeds' }})
    
