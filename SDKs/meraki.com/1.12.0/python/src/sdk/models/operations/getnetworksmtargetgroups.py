from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSmTargetGroupsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmTargetGroupsQueryParams:
    with_details: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'withDetails', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkSmTargetGroupsRequest:
    path_params: GetNetworkSmTargetGroupsPathParams = field()
    query_params: GetNetworkSmTargetGroupsQueryParams = field()
    

@dataclass
class GetNetworkSmTargetGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_sm_target_groups_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
