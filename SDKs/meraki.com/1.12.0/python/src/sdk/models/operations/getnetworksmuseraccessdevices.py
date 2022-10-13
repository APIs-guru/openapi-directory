from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetNetworkSmUserAccessDevicesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmUserAccessDevicesQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkSmUserAccessDevicesRequest:
    path_params: GetNetworkSmUserAccessDevicesPathParams = field(default=None)
    query_params: GetNetworkSmUserAccessDevicesQueryParams = field(default=None)
    

@dataclass
class GetNetworkSmUserAccessDevicesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_network_sm_user_access_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
