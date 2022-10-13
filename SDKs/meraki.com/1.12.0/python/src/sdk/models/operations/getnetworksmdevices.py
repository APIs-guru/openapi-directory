from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetNetworkSmDevicesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmDevicesQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    scope: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': False }})
    serials: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'serials', 'style': 'form', 'explode': False }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    wifi_macs: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'wifiMacs', 'style': 'form', 'explode': False }})
    

@dataclass
class GetNetworkSmDevicesRequest:
    path_params: GetNetworkSmDevicesPathParams = field(default=None)
    query_params: GetNetworkSmDevicesQueryParams = field(default=None)
    

@dataclass
class GetNetworkSmDevicesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_network_sm_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
