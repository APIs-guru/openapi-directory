from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkWebhooksWebhookTestPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkWebhooksWebhookTestRequestBody:
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    shared_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedSecret') }})
    

@dataclass
class CreateNetworkWebhooksWebhookTestRequest:
    path_params: CreateNetworkWebhooksWebhookTestPathParams = field()
    request: CreateNetworkWebhooksWebhookTestRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkWebhooksWebhookTestResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_webhooks_webhook_test_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
