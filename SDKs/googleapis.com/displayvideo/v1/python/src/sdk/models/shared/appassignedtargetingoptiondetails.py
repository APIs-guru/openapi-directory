from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""AppAssignedTargetingOptionDetails
    Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.
    """
    
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    app_platform: Optional[AppAssignedTargetingOptionDetailsAppPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPlatform') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negative') }})
    

@dataclass_json
@dataclass
class AppAssignedTargetingOptionDetailsInput:
    r"""AppAssignedTargetingOptionDetailsInput
    Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.
    """
    
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    app_platform: Optional[AppAssignedTargetingOptionDetailsAppPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPlatform') }})
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negative') }})
    
