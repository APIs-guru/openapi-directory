from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchQosRulesOrderPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchQosRulesOrderRequest:
    path_params: GetNetworkSwitchQosRulesOrderPathParams = field()
    

@dataclass
class GetNetworkSwitchQosRulesOrderResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_qos_rules_order_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
