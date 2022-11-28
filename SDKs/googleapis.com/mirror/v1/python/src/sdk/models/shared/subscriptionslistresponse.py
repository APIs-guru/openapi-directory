from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SubscriptionsListResponse:
    r"""SubscriptionsListResponse
    A list of Subscriptions. This is the response from the server to GET requests on the subscription collection.
    """
    
    items: Optional[List[Subscription]] = field(default=None)
    kind: Optional[str] = field(default=None)
    
