from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksV3AppIDSubscriptionsCreatePathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWebhooksV3AppIDSubscriptionsCreateSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostWebhooksV3AppIDSubscriptionsCreateRequest:
    path_params: PostWebhooksV3AppIDSubscriptionsCreatePathParams = field(default=None)
    request: shared.SubscriptionCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostWebhooksV3AppIDSubscriptionsCreateSecurity = field(default=None)
    

@dataclass
class PostWebhooksV3AppIDSubscriptionsCreateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subscription_response: Optional[shared.SubscriptionResponse] = field(default=None)
    
