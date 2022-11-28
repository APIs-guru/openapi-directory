from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCameraQualityRetentionProfilePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    quality_retention_profile_id: str = field(metadata={'path_param': { 'field_name': 'qualityRetentionProfileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCameraQualityRetentionProfileRequest:
    path_params: GetNetworkCameraQualityRetentionProfilePathParams = field()
    

@dataclass
class GetNetworkCameraQualityRetentionProfileResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_camera_quality_retention_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
