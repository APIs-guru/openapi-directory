from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSwitchQosRulePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    qos_rule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'qosRuleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSwitchQosRuleRequest:
    path_params: DeleteNetworkSwitchQosRulePathParams = field(default=None)
    

@dataclass
class DeleteNetworkSwitchQosRuleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
