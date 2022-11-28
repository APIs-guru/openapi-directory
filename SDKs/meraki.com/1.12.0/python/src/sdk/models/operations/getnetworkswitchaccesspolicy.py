from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchAccessPolicyPathParams:
    access_policy_number: str = field(metadata={'path_param': { 'field_name': 'accessPolicyNumber', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchAccessPolicyRequest:
    path_params: GetNetworkSwitchAccessPolicyPathParams = field()
    

@dataclass
class GetNetworkSwitchAccessPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_access_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
