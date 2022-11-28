from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSmDeviceWlanListsPathParams:
    device_id: str = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmDeviceWlanListsRequest:
    path_params: GetNetworkSmDeviceWlanListsPathParams = field()
    

@dataclass
class GetNetworkSmDeviceWlanListsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_sm_device_wlan_lists_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
