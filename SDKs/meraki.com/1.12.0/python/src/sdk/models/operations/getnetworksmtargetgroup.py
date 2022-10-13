from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSmTargetGroupPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    target_group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'targetGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmTargetGroupQueryParams:
    with_details: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'withDetails', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkSmTargetGroupRequest:
    path_params: GetNetworkSmTargetGroupPathParams = field(default=None)
    query_params: GetNetworkSmTargetGroupQueryParams = field(default=None)
    

@dataclass
class GetNetworkSmTargetGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_sm_target_group_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
