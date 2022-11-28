from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSmDeviceCertsPathParams:
    device_id: str = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmDeviceCertsRequest:
    path_params: GetNetworkSmDeviceCertsPathParams = field()
    

@dataclass
class GetNetworkSmDeviceCertsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_sm_device_certs_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
