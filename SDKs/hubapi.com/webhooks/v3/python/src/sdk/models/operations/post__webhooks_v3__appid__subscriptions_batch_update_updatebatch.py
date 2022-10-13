from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchPathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchRequest:
    path_params: PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchPathParams = field(default=None)
    request: shared.BatchInputSubscriptionBatchUpdateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchSecurity = field(default=None)
    

@dataclass
class PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchResponse:
    batch_response_subscription_response: Optional[shared.BatchResponseSubscriptionResponse] = field(default=None)
    batch_response_subscription_response_with_errors: Optional[shared.BatchResponseSubscriptionResponseWithErrors] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
