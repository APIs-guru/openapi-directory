from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchQosRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchQosRulesRequest:
    path_params: GetNetworkSwitchQosRulesPathParams = field()
    

@dataclass
class GetNetworkSwitchQosRulesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_qos_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
