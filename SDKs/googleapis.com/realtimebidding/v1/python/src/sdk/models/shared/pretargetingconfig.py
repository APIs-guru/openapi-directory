from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import apptargeting
from . import numerictargetingdimension
from . import creativedimensions
from . import stringtargetingdimension
from . import numerictargetingdimension
from . import numerictargetingdimension
from . import stringtargetingdimension

class PretargetingConfigAllowedUserTargetingModesEnum(str, Enum):
    USER_TARGETING_MODE_UNSPECIFIED = "USER_TARGETING_MODE_UNSPECIFIED"
    REMARKETING_ADS = "REMARKETING_ADS"
    INTEREST_BASED_TARGETING = "INTEREST_BASED_TARGETING"

class PretargetingConfigIncludedEnvironmentsEnum(str, Enum):
    ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED"
    APP = "APP"
    WEB = "WEB"

class PretargetingConfigIncludedFormatsEnum(str, Enum):
    CREATIVE_FORMAT_UNSPECIFIED = "CREATIVE_FORMAT_UNSPECIFIED"
    HTML = "HTML"
    VAST = "VAST"
    NATIVE = "NATIVE"

class PretargetingConfigIncludedPlatformsEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    PERSONAL_COMPUTER = "PERSONAL_COMPUTER"
    PHONE = "PHONE"
    TABLET = "TABLET"
    CONNECTED_TV = "CONNECTED_TV"

class PretargetingConfigIncludedUserIDTypesEnum(str, Enum):
    USER_ID_TYPE_UNSPECIFIED = "USER_ID_TYPE_UNSPECIFIED"
    HOSTED_MATCH_DATA = "HOSTED_MATCH_DATA"
    GOOGLE_COOKIE = "GOOGLE_COOKIE"
    DEVICE_ID = "DEVICE_ID"

class PretargetingConfigInterstitialTargetingEnum(str, Enum):
    INTERSTITIAL_TARGETING_UNSPECIFIED = "INTERSTITIAL_TARGETING_UNSPECIFIED"
    ONLY_INTERSTITIAL_REQUESTS = "ONLY_INTERSTITIAL_REQUESTS"
    ONLY_NON_INTERSTITIAL_REQUESTS = "ONLY_NON_INTERSTITIAL_REQUESTS"

class PretargetingConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class PretargetingConfig:
    allowed_user_targeting_modes: Optional[List[PretargetingConfigAllowedUserTargetingModesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedUserTargetingModes' }})
    app_targeting: Optional[apptargeting.AppTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appTargeting' }})
    billing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingId' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    excluded_content_label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedContentLabelIds' }})
    geo_targeting: Optional[numerictargetingdimension.NumericTargetingDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoTargeting' }})
    included_creative_dimensions: Optional[List[creativedimensions.CreativeDimensions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedCreativeDimensions' }})
    included_environments: Optional[List[PretargetingConfigIncludedEnvironmentsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedEnvironments' }})
    included_formats: Optional[List[PretargetingConfigIncludedFormatsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedFormats' }})
    included_languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedLanguages' }})
    included_mobile_operating_system_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedMobileOperatingSystemIds' }})
    included_platforms: Optional[List[PretargetingConfigIncludedPlatformsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedPlatforms' }})
    included_user_id_types: Optional[List[PretargetingConfigIncludedUserIDTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedUserIdTypes' }})
    interstitial_targeting: Optional[PretargetingConfigInterstitialTargetingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interstitialTargeting' }})
    invalid_geo_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalidGeoIds' }})
    maximum_qps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumQps' }})
    minimum_viewability_decile: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumViewabilityDecile' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    publisher_targeting: Optional[stringtargetingdimension.StringTargetingDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherTargeting' }})
    state: Optional[PretargetingConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    user_list_targeting: Optional[numerictargetingdimension.NumericTargetingDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userListTargeting' }})
    vertical_targeting: Optional[numerictargetingdimension.NumericTargetingDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verticalTargeting' }})
    web_targeting: Optional[stringtargetingdimension.StringTargetingDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webTargeting' }})
    
