from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkWebhooksHTTPServerPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkWebhooksHTTPServerRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    shared_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedSecret') }})
    

@dataclass
class CreateNetworkWebhooksHTTPServerRequest:
    path_params: CreateNetworkWebhooksHTTPServerPathParams = field()
    request: CreateNetworkWebhooksHTTPServerRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkWebhooksHTTPServerResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_webhooks_http_server_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
