from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchivePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    subscription_id: int = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveRequest:
    path_params: DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchivePathParams = field()
    security: DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveSecurity = field()
    

@dataclass
class DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
