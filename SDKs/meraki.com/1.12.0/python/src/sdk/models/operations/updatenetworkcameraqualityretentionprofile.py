from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkCameraQualityRetentionProfilePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    quality_retention_profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'qualityRetentionProfileId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"


@dataclass_json
@dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72:
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"


@dataclass_json
@dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We:
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"


@dataclass_json
@dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71:
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"
    TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512 = "2688x1512"


@dataclass_json
@dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X:
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum(str, Enum):
    ONE_THOUSAND_AND_EIGHTYX1080 = "1080x1080"
    TWO_THOUSAND_AND_FIFTY_EIGHTX2058 = "2058x2058"


@dataclass_json
@dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32:
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    

@dataclass_json
@dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings:
    mv12_mv22_mv72: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MV12/MV22/MV72' }})
    mv12_we: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MV12WE' }})
    mv21_mv71: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MV21/MV71' }})
    mv22_x_mv72_x: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MV22X/MV72X' }})
    mv32: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MV32' }})
    

@dataclass_json
@dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBody:
    audio_recording_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioRecordingEnabled' }})
    cloud_archive_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudArchiveEnabled' }})
    max_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRetentionDays' }})
    motion_based_retention_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'motionBasedRetentionEnabled' }})
    motion_detector_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'motionDetectorVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    restricted_bandwidth_mode_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedBandwidthModeEnabled' }})
    schedule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleId' }})
    video_settings: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoSettings' }})
    

@dataclass
class UpdateNetworkCameraQualityRetentionProfileRequest:
    path_params: UpdateNetworkCameraQualityRetentionProfilePathParams = field(default=None)
    request: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkCameraQualityRetentionProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_camera_quality_retention_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
