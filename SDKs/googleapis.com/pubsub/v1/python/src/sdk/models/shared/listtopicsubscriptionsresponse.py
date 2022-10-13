from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListTopicSubscriptionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    subscriptions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions' }})
    
