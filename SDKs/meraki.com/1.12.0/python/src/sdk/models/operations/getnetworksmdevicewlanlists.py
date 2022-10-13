from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetNetworkSmDeviceWlanListsPathParams:
    device_id: str = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmDeviceWlanListsRequest:
    path_params: GetNetworkSmDeviceWlanListsPathParams = field(default=None)
    

@dataclass
class GetNetworkSmDeviceWlanListsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_sm_device_wlan_lists_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
