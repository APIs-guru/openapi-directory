from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksV3AppIDSubscriptionsCreatePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWebhooksV3AppIDSubscriptionsCreateSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostWebhooksV3AppIDSubscriptionsCreateRequest:
    path_params: PostWebhooksV3AppIDSubscriptionsCreatePathParams = field()
    request: shared.SubscriptionCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostWebhooksV3AppIDSubscriptionsCreateSecurity = field()
    

@dataclass
class PostWebhooksV3AppIDSubscriptionsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    subscription_response: Optional[shared.SubscriptionResponse] = field(default=None)
    
