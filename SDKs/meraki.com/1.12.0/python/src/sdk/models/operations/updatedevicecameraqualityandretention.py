from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDeviceCameraQualityAndRetentionPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum(str, Enum):
    STANDARD = "Standard"
    HIGH = "High"
    ENHANCED = "Enhanced"

class UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"
    ONE_THOUSAND_AND_EIGHTYX1080 = "1080x1080"
    TWO_THOUSAND_AND_FIFTY_EIGHTX2058 = "2058x2058"


@dataclass_json
@dataclass
class UpdateDeviceCameraQualityAndRetentionRequestBody:
    audio_recording_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioRecordingEnabled' }})
    motion_based_retention_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'motionBasedRetentionEnabled' }})
    motion_detector_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'motionDetectorVersion' }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileId' }})
    quality: Optional[UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    resolution: Optional[UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    restricted_bandwidth_mode_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedBandwidthModeEnabled' }})
    

@dataclass
class UpdateDeviceCameraQualityAndRetentionRequest:
    path_params: UpdateDeviceCameraQualityAndRetentionPathParams = field(default=None)
    request: Optional[UpdateDeviceCameraQualityAndRetentionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceCameraQualityAndRetentionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_device_camera_quality_and_retention_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
