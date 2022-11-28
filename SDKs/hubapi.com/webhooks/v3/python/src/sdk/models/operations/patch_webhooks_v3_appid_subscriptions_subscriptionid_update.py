from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdatePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    subscription_id: int = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateRequest:
    path_params: PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdatePathParams = field()
    request: shared.SubscriptionPatchRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateSecurity = field()
    

@dataclass
class PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    subscription_response: Optional[shared.SubscriptionResponse] = field(default=None)
    
