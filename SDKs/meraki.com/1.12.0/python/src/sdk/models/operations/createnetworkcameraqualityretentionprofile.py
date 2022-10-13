from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkCameraQualityRetentionProfilePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"


@dataclass_json
@dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72:
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"


@dataclass_json
@dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We:
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"


@dataclass_json
@dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71:
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"
    TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512 = "2688x1512"


@dataclass_json
@dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X:
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum(str, Enum):
    ONE_THOUSAND_AND_EIGHTYX1080 = "1080x1080"
    TWO_THOUSAND_AND_FIFTY_EIGHTX2058 = "2058x2058"


@dataclass_json
@dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32:
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    

@dataclass_json
@dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings:
    mv12_mv22_mv72: Optional[CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MV12/MV22/MV72' }})
    mv12_we: Optional[CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MV12WE' }})
    mv21_mv71: Optional[CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MV21/MV71' }})
    mv22_x_mv72_x: Optional[CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MV22X/MV72X' }})
    mv32: Optional[CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MV32' }})
    

@dataclass_json
@dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBody:
    audio_recording_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioRecordingEnabled' }})
    cloud_archive_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudArchiveEnabled' }})
    max_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRetentionDays' }})
    motion_based_retention_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'motionBasedRetentionEnabled' }})
    motion_detector_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'motionDetectorVersion' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    restricted_bandwidth_mode_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedBandwidthModeEnabled' }})
    schedule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleId' }})
    video_settings: Optional[CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoSettings' }})
    

@dataclass
class CreateNetworkCameraQualityRetentionProfileRequest:
    path_params: CreateNetworkCameraQualityRetentionProfilePathParams = field(default=None)
    request: CreateNetworkCameraQualityRetentionProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkCameraQualityRetentionProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_camera_quality_retention_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
