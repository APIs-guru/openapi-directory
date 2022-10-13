from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSmDeviceSoftwaresPathParams:
    device_id: str = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmDeviceSoftwaresRequest:
    path_params: GetNetworkSmDeviceSoftwaresPathParams = field(default=None)
    

@dataclass
class GetNetworkSmDeviceSoftwaresResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_sm_device_softwares_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
