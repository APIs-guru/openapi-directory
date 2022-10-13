from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchQosRulePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    qos_rule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'qosRuleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchQosRuleRequest:
    path_params: GetNetworkSwitchQosRulePathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchQosRuleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_qos_rule_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
