from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchAccessPolicyPathParams:
    access_policy_number: str = field(default=None, metadata={'path_param': { 'field_name': 'accessPolicyNumber', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchAccessPolicyRequest:
    path_params: GetNetworkSwitchAccessPolicyPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchAccessPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_access_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
