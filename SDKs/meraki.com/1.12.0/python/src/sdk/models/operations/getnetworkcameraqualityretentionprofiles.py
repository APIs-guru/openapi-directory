from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCameraQualityRetentionProfilesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCameraQualityRetentionProfilesRequest:
    path_params: GetNetworkCameraQualityRetentionProfilesPathParams = field(default=None)
    

@dataclass
class GetNetworkCameraQualityRetentionProfilesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_camera_quality_retention_profiles_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
