from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkClientPolicyPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientPolicyRequestBody:
    device_policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    

@dataclass
class UpdateNetworkClientPolicyRequest:
    path_params: UpdateNetworkClientPolicyPathParams = field(default=None)
    request: UpdateNetworkClientPolicyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkClientPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_client_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
