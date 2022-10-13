from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDPathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    subscription_id: int = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDRequest:
    path_params: GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDPathParams = field(default=None)
    security: GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDSecurity = field(default=None)
    

@dataclass
class GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subscription_response: Optional[shared.SubscriptionResponse] = field(default=None)
    
