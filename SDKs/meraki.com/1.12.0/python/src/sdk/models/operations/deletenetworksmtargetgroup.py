from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSmTargetGroupPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    target_group_id: str = field(metadata={'path_param': { 'field_name': 'targetGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSmTargetGroupRequest:
    path_params: DeleteNetworkSmTargetGroupPathParams = field()
    

@dataclass
class DeleteNetworkSmTargetGroupResponse:
    content_type: str = field()
    status_code: int = field()
    
