from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkClientPolicyPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientPolicyRequestBody:
    device_policy: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    

@dataclass
class UpdateNetworkClientPolicyRequest:
    path_params: UpdateNetworkClientPolicyPathParams = field()
    request: UpdateNetworkClientPolicyRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkClientPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_client_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
