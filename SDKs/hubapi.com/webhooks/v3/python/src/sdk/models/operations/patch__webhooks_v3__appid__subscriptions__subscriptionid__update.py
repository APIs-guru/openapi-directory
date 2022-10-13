from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdatePathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    subscription_id: int = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateRequest:
    path_params: PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdatePathParams = field(default=None)
    request: shared.SubscriptionPatchRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateSecurity = field(default=None)
    

@dataclass
class PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subscription_response: Optional[shared.SubscriptionResponse] = field(default=None)
    
