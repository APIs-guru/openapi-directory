from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchQosRulesOrderPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchQosRulesOrderRequestBody:
    rule_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleIds' }})
    

@dataclass
class UpdateNetworkSwitchQosRulesOrderRequest:
    path_params: UpdateNetworkSwitchQosRulesOrderPathParams = field(default=None)
    request: UpdateNetworkSwitchQosRulesOrderRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchQosRulesOrderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_qos_rules_order_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
