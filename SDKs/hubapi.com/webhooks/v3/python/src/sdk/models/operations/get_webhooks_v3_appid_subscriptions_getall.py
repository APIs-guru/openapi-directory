from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWebhooksV3AppIDSubscriptionsGetAllPathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhooksV3AppIDSubscriptionsGetAllSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetWebhooksV3AppIDSubscriptionsGetAllRequest:
    path_params: GetWebhooksV3AppIDSubscriptionsGetAllPathParams = field()
    security: GetWebhooksV3AppIDSubscriptionsGetAllSecurity = field()
    

@dataclass
class GetWebhooksV3AppIDSubscriptionsGetAllResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    subscription_list_response: Optional[shared.SubscriptionListResponse] = field(default=None)
    
