from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWebhooksHTTPServerPathParams:
    http_server_id: str = field(metadata={'path_param': { 'field_name': 'httpServerId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWebhooksHTTPServerRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    shared_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedSecret') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass
class UpdateNetworkWebhooksHTTPServerRequest:
    path_params: UpdateNetworkWebhooksHTTPServerPathParams = field()
    request: Optional[UpdateNetworkWebhooksHTTPServerRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWebhooksHTTPServerResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_webhooks_http_server_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
