from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchAccessPoliciesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchAccessPoliciesRequest:
    path_params: GetNetworkSwitchAccessPoliciesPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchAccessPoliciesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_access_policies_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
