from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCameraQualityRetentionProfilesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCameraQualityRetentionProfilesRequest:
    path_params: GetNetworkCameraQualityRetentionProfilesPathParams = field()
    

@dataclass
class GetNetworkCameraQualityRetentionProfilesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_camera_quality_retention_profiles_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
