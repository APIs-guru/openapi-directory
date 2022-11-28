from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchPathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchRequest:
    path_params: PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchPathParams = field()
    request: shared.BatchInputSubscriptionBatchUpdateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchSecurity = field()
    

@dataclass
class PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_response_subscription_response: Optional[shared.BatchResponseSubscriptionResponse] = field(default=None)
    batch_response_subscription_response_with_errors: Optional[shared.BatchResponseSubscriptionResponseWithErrors] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
