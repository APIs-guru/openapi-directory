from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkWebhooksWebhookTestPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkWebhooksWebhookTestRequestBody:
    shared_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedSecret' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class CreateNetworkWebhooksWebhookTestRequest:
    path_params: CreateNetworkWebhooksWebhookTestPathParams = field(default=None)
    request: CreateNetworkWebhooksWebhookTestRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkWebhooksWebhookTestResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_webhooks_webhook_test_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
