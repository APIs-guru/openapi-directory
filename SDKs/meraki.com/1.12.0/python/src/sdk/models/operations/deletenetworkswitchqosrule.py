from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSwitchQosRulePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    qos_rule_id: str = field(metadata={'path_param': { 'field_name': 'qosRuleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSwitchQosRuleRequest:
    path_params: DeleteNetworkSwitchQosRulePathParams = field()
    

@dataclass
class DeleteNetworkSwitchQosRuleResponse:
    content_type: str = field()
    status_code: int = field()
    
