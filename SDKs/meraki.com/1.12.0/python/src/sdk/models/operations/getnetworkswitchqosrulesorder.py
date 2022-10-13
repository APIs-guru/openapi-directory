from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchQosRulesOrderPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchQosRulesOrderRequest:
    path_params: GetNetworkSwitchQosRulesOrderPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchQosRulesOrderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_qos_rules_order_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
