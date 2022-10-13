from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import feed


@dataclass_json
@dataclass
class CreateFeedRequest:
    feed: Optional[feed.Feed] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feed' }})
    feed_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedId' }})
    
