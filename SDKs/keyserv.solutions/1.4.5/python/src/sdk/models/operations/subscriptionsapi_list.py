from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SubscriptionsAPIListQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class SubscriptionsAPIListRequest:
    query_params: SubscriptionsAPIListQueryParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubscriptionsAPIListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subscription_views: Optional[List[shared.SubscriptionView]] = field(default=None)
    
