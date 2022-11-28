from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSmTargetGroupPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    target_group_id: str = field(metadata={'path_param': { 'field_name': 'targetGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmTargetGroupQueryParams:
    with_details: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'withDetails', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkSmTargetGroupRequest:
    path_params: GetNetworkSmTargetGroupPathParams = field()
    query_params: GetNetworkSmTargetGroupQueryParams = field()
    

@dataclass
class GetNetworkSmTargetGroupResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_sm_target_group_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
