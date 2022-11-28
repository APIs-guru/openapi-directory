from dataclasses import dataclass, field



@dataclass
class DeleteNetworkCameraQualityRetentionProfilePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    quality_retention_profile_id: str = field(metadata={'path_param': { 'field_name': 'qualityRetentionProfileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkCameraQualityRetentionProfileRequest:
    path_params: DeleteNetworkCameraQualityRetentionProfilePathParams = field()
    

@dataclass
class DeleteNetworkCameraQualityRetentionProfileResponse:
    content_type: str = field()
    status_code: int = field()
    
