from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetNetworkSmUserAccessDevicesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmUserAccessDevicesQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkSmUserAccessDevicesRequest:
    path_params: GetNetworkSmUserAccessDevicesPathParams = field()
    query_params: GetNetworkSmUserAccessDevicesQueryParams = field()
    

@dataclass
class GetNetworkSmUserAccessDevicesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_network_sm_user_access_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
