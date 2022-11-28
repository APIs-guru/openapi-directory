from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TargetingOptionTargetingTypeEnum(str, Enum):
    TARGETING_TYPE_UNSPECIFIED = "TARGETING_TYPE_UNSPECIFIED"
    TARGETING_TYPE_CHANNEL = "TARGETING_TYPE_CHANNEL"
    TARGETING_TYPE_APP_CATEGORY = "TARGETING_TYPE_APP_CATEGORY"
    TARGETING_TYPE_APP = "TARGETING_TYPE_APP"
    TARGETING_TYPE_URL = "TARGETING_TYPE_URL"
    TARGETING_TYPE_DAY_AND_TIME = "TARGETING_TYPE_DAY_AND_TIME"
    TARGETING_TYPE_AGE_RANGE = "TARGETING_TYPE_AGE_RANGE"
    TARGETING_TYPE_REGIONAL_LOCATION_LIST = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
    TARGETING_TYPE_PROXIMITY_LOCATION_LIST = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
    TARGETING_TYPE_GENDER = "TARGETING_TYPE_GENDER"
    TARGETING_TYPE_VIDEO_PLAYER_SIZE = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
    TARGETING_TYPE_USER_REWARDED_CONTENT = "TARGETING_TYPE_USER_REWARDED_CONTENT"
    TARGETING_TYPE_PARENTAL_STATUS = "TARGETING_TYPE_PARENTAL_STATUS"
    TARGETING_TYPE_CONTENT_INSTREAM_POSITION = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
    TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
    TARGETING_TYPE_DEVICE_TYPE = "TARGETING_TYPE_DEVICE_TYPE"
    TARGETING_TYPE_AUDIENCE_GROUP = "TARGETING_TYPE_AUDIENCE_GROUP"
    TARGETING_TYPE_BROWSER = "TARGETING_TYPE_BROWSER"
    TARGETING_TYPE_HOUSEHOLD_INCOME = "TARGETING_TYPE_HOUSEHOLD_INCOME"
    TARGETING_TYPE_ON_SCREEN_POSITION = "TARGETING_TYPE_ON_SCREEN_POSITION"
    TARGETING_TYPE_THIRD_PARTY_VERIFIER = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
    TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
    TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
    TARGETING_TYPE_ENVIRONMENT = "TARGETING_TYPE_ENVIRONMENT"
    TARGETING_TYPE_CARRIER_AND_ISP = "TARGETING_TYPE_CARRIER_AND_ISP"
    TARGETING_TYPE_OPERATING_SYSTEM = "TARGETING_TYPE_OPERATING_SYSTEM"
    TARGETING_TYPE_DEVICE_MAKE_MODEL = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
    TARGETING_TYPE_KEYWORD = "TARGETING_TYPE_KEYWORD"
    TARGETING_TYPE_NEGATIVE_KEYWORD_LIST = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
    TARGETING_TYPE_VIEWABILITY = "TARGETING_TYPE_VIEWABILITY"
    TARGETING_TYPE_CATEGORY = "TARGETING_TYPE_CATEGORY"
    TARGETING_TYPE_INVENTORY_SOURCE = "TARGETING_TYPE_INVENTORY_SOURCE"
    TARGETING_TYPE_LANGUAGE = "TARGETING_TYPE_LANGUAGE"
    TARGETING_TYPE_AUTHORIZED_SELLER_STATUS = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
    TARGETING_TYPE_GEO_REGION = "TARGETING_TYPE_GEO_REGION"
    TARGETING_TYPE_INVENTORY_SOURCE_GROUP = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
    TARGETING_TYPE_EXCHANGE = "TARGETING_TYPE_EXCHANGE"
    TARGETING_TYPE_SUB_EXCHANGE = "TARGETING_TYPE_SUB_EXCHANGE"
    TARGETING_TYPE_POI = "TARGETING_TYPE_POI"
    TARGETING_TYPE_BUSINESS_CHAIN = "TARGETING_TYPE_BUSINESS_CHAIN"
    TARGETING_TYPE_CONTENT_DURATION = "TARGETING_TYPE_CONTENT_DURATION"
    TARGETING_TYPE_CONTENT_STREAM_TYPE = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
    TARGETING_TYPE_NATIVE_CONTENT_POSITION = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
    TARGETING_TYPE_OMID = "TARGETING_TYPE_OMID"
    TARGETING_TYPE_AUDIO_CONTENT_TYPE = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
    TARGETING_TYPE_CONTENT_GENRE = "TARGETING_TYPE_CONTENT_GENRE"


@dataclass_json
@dataclass
class TargetingOption:
    r"""TargetingOption
    Represents a single targeting option, which is a targetable concept in DV360.
    """
    
    age_range_details: Optional[AgeRangeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageRangeDetails') }})
    app_category_details: Optional[AppCategoryTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appCategoryDetails') }})
    audio_content_type_details: Optional[AudioContentTypeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioContentTypeDetails') }})
    authorized_seller_status_details: Optional[AuthorizedSellerStatusTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedSellerStatusDetails') }})
    browser_details: Optional[BrowserTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserDetails') }})
    business_chain_details: Optional[BusinessChainTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessChainDetails') }})
    carrier_and_isp_details: Optional[CarrierAndIspTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierAndIspDetails') }})
    category_details: Optional[CategoryTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryDetails') }})
    content_duration_details: Optional[ContentDurationTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDurationDetails') }})
    content_genre_details: Optional[ContentGenreTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentGenreDetails') }})
    content_instream_position_details: Optional[ContentInstreamPositionTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentInstreamPositionDetails') }})
    content_outstream_position_details: Optional[ContentOutstreamPositionTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentOutstreamPositionDetails') }})
    content_stream_type_details: Optional[ContentStreamTypeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentStreamTypeDetails') }})
    device_make_model_details: Optional[DeviceMakeModelTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMakeModelDetails') }})
    device_type_details: Optional[DeviceTypeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTypeDetails') }})
    digital_content_label_details: Optional[DigitalContentLabelTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digitalContentLabelDetails') }})
    environment_details: Optional[EnvironmentTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentDetails') }})
    exchange_details: Optional[ExchangeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeDetails') }})
    gender_details: Optional[GenderTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genderDetails') }})
    geo_region_details: Optional[GeoRegionTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoRegionDetails') }})
    household_income_details: Optional[HouseholdIncomeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('householdIncomeDetails') }})
    language_details: Optional[LanguageTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageDetails') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    native_content_position_details: Optional[NativeContentPositionTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeContentPositionDetails') }})
    omid_details: Optional[OmidTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('omidDetails') }})
    on_screen_position_details: Optional[OnScreenPositionTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onScreenPositionDetails') }})
    operating_system_details: Optional[OperatingSystemTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemDetails') }})
    parental_status_details: Optional[ParentalStatusTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentalStatusDetails') }})
    poi_details: Optional[PoiTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poiDetails') }})
    sensitive_category_details: Optional[SensitiveCategoryTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveCategoryDetails') }})
    sub_exchange_details: Optional[SubExchangeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subExchangeDetails') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    targeting_type: Optional[TargetingOptionTargetingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingType') }})
    user_rewarded_content_details: Optional[UserRewardedContentTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRewardedContentDetails') }})
    video_player_size_details: Optional[VideoPlayerSizeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoPlayerSizeDetails') }})
    viewability_details: Optional[ViewabilityTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewabilityDetails') }})
    
