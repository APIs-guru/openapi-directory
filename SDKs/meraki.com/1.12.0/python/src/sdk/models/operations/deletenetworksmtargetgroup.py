from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSmTargetGroupPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    target_group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'targetGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSmTargetGroupRequest:
    path_params: DeleteNetworkSmTargetGroupPathParams = field(default=None)
    

@dataclass
class DeleteNetworkSmTargetGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
