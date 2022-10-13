from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchQosRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchQosRulesRequest:
    path_params: GetNetworkSwitchQosRulesPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchQosRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_qos_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
