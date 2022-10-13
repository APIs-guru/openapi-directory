from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AppAssignedTargetingOptionDetailsAppPlatformEnum(str, Enum):
    APP_PLATFORM_UNSPECIFIED = "APP_PLATFORM_UNSPECIFIED"
    APP_PLATFORM_IOS = "APP_PLATFORM_IOS"
    APP_PLATFORM_ANDROID = "APP_PLATFORM_ANDROID"
    APP_PLATFORM_ROKU = "APP_PLATFORM_ROKU"
    APP_PLATFORM_AMAZON_FIRETV = "APP_PLATFORM_AMAZON_FIRETV"
    APP_PLATFORM_PLAYSTATION = "APP_PLATFORM_PLAYSTATION"
    APP_PLATFORM_APPLE_TV = "APP_PLATFORM_APPLE_TV"
    APP_PLATFORM_XBOX = "APP_PLATFORM_XBOX"
    APP_PLATFORM_SAMSUNG_TV = "APP_PLATFORM_SAMSUNG_TV"
    APP_PLATFORM_ANDROID_TV = "APP_PLATFORM_ANDROID_TV"
    APP_PLATFORM_GENERIC_CTV = "APP_PLATFORM_GENERIC_CTV"


@dataclass_json
@dataclass
class AppAssignedTargetingOptionDetails:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    app_platform: Optional[AppAssignedTargetingOptionDetailsAppPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appPlatform' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negative' }})
    
