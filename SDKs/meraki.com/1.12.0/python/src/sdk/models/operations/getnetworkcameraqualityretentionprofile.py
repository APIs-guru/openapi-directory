from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCameraQualityRetentionProfilePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    quality_retention_profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'qualityRetentionProfileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCameraQualityRetentionProfileRequest:
    path_params: GetNetworkCameraQualityRetentionProfilePathParams = field(default=None)
    

@dataclass
class GetNetworkCameraQualityRetentionProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_camera_quality_retention_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
