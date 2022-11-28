from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCameraSchedulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCameraSchedulesRequest:
    path_params: GetNetworkCameraSchedulesPathParams = field()
    

@dataclass
class GetNetworkCameraSchedulesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_camera_schedules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
