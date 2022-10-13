from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import subscriptioncontentdetails
from . import subscriptionsnippet
from . import subscriptionsubscribersnippet


@dataclass_json
@dataclass
class Subscription:
    content_details: Optional[subscriptioncontentdetails.SubscriptionContentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDetails' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    snippet: Optional[subscriptionsnippet.SubscriptionSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    subscriber_snippet: Optional[subscriptionsubscribersnippet.SubscriptionSubscriberSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriberSnippet' }})
    
