from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetWebhooksV3AppIDSubscriptionsGetAllPathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhooksV3AppIDSubscriptionsGetAllSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetWebhooksV3AppIDSubscriptionsGetAllRequest:
    path_params: GetWebhooksV3AppIDSubscriptionsGetAllPathParams = field(default=None)
    security: GetWebhooksV3AppIDSubscriptionsGetAllSecurity = field(default=None)
    

@dataclass
class GetWebhooksV3AppIDSubscriptionsGetAllResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subscription_list_response: Optional[shared.SubscriptionListResponse] = field(default=None)
    
