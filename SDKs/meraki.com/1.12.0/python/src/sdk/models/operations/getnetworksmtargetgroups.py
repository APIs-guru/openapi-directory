from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSmTargetGroupsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmTargetGroupsQueryParams:
    with_details: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'withDetails', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkSmTargetGroupsRequest:
    path_params: GetNetworkSmTargetGroupsPathParams = field(default=None)
    query_params: GetNetworkSmTargetGroupsQueryParams = field(default=None)
    

@dataclass
class GetNetworkSmTargetGroupsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_sm_target_groups_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
