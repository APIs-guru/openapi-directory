from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AssignedTargetingOptionInheritanceEnum(str, Enum):
    INHERITANCE_UNSPECIFIED = "INHERITANCE_UNSPECIFIED"
    NOT_INHERITED = "NOT_INHERITED"
    INHERITED_FROM_PARTNER = "INHERITED_FROM_PARTNER"
    INHERITED_FROM_ADVERTISER = "INHERITED_FROM_ADVERTISER"

class AssignedTargetingOptionTargetingTypeEnum(str, Enum):
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
class AssignedTargetingOptionInput:
    r"""AssignedTargetingOptionInput
    A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
    """
    
    age_range_details: Optional[AgeRangeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageRangeDetails') }})
    app_category_details: Optional[AppCategoryAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appCategoryDetails') }})
    app_details: Optional[AppAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appDetails') }})
    audience_group_details: Optional[AudienceGroupAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceGroupDetails') }})
    audio_content_type_details: Optional[AudioContentTypeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioContentTypeDetails') }})
    authorized_seller_status_details: Optional[AuthorizedSellerStatusAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedSellerStatusDetails') }})
    browser_details: Optional[BrowserAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserDetails') }})
    business_chain_details: Optional[BusinessChainAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessChainDetails') }})
    carrier_and_isp_details: Optional[CarrierAndIspAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierAndIspDetails') }})
    category_details: Optional[CategoryAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryDetails') }})
    channel_details: Optional[ChannelAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelDetails') }})
    content_duration_details: Optional[ContentDurationAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDurationDetails') }})
    content_genre_details: Optional[ContentGenreAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentGenreDetails') }})
    content_instream_position_details: Optional[ContentInstreamPositionAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentInstreamPositionDetails') }})
    content_outstream_position_details: Optional[ContentOutstreamPositionAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentOutstreamPositionDetails') }})
    content_stream_type_details: Optional[ContentStreamTypeAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentStreamTypeDetails') }})
    day_and_time_details: Optional[DayAndTimeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayAndTimeDetails') }})
    device_make_model_details: Optional[DeviceMakeModelAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMakeModelDetails') }})
    device_type_details: Optional[DeviceTypeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTypeDetails') }})
    digital_content_label_exclusion_details: Optional[DigitalContentLabelAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digitalContentLabelExclusionDetails') }})
    environment_details: Optional[EnvironmentAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentDetails') }})
    exchange_details: Optional[ExchangeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeDetails') }})
    gender_details: Optional[GenderAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genderDetails') }})
    geo_region_details: Optional[GeoRegionAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoRegionDetails') }})
    household_income_details: Optional[HouseholdIncomeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('householdIncomeDetails') }})
    inventory_source_details: Optional[InventorySourceAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceDetails') }})
    inventory_source_group_details: Optional[InventorySourceGroupAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceGroupDetails') }})
    keyword_details: Optional[KeywordAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordDetails') }})
    language_details: Optional[LanguageAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageDetails') }})
    native_content_position_details: Optional[NativeContentPositionAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeContentPositionDetails') }})
    negative_keyword_list_details: Optional[NegativeKeywordListAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeKeywordListDetails') }})
    omid_details: Optional[OmidAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('omidDetails') }})
    on_screen_position_details: Optional[OnScreenPositionAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onScreenPositionDetails') }})
    operating_system_details: Optional[OperatingSystemAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemDetails') }})
    parental_status_details: Optional[ParentalStatusAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentalStatusDetails') }})
    poi_details: Optional[PoiAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poiDetails') }})
    proximity_location_list_details: Optional[ProximityLocationListAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityLocationListDetails') }})
    regional_location_list_details: Optional[RegionalLocationListAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalLocationListDetails') }})
    sensitive_category_exclusion_details: Optional[SensitiveCategoryAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveCategoryExclusionDetails') }})
    sub_exchange_details: Optional[SubExchangeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subExchangeDetails') }})
    third_party_verifier_details: Optional[ThirdPartyVerifierAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyVerifierDetails') }})
    url_details: Optional[URLAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlDetails') }})
    user_rewarded_content_details: Optional[UserRewardedContentAssignedTargetingOptionDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRewardedContentDetails') }})
    video_player_size_details: Optional[VideoPlayerSizeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoPlayerSizeDetails') }})
    viewability_details: Optional[ViewabilityAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewabilityDetails') }})
    

@dataclass_json
@dataclass
class AssignedTargetingOption:
    r"""AssignedTargetingOption
    A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
    """
    
    age_range_details: Optional[AgeRangeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageRangeDetails') }})
    app_category_details: Optional[AppCategoryAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appCategoryDetails') }})
    app_details: Optional[AppAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appDetails') }})
    assigned_targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedTargetingOptionId') }})
    audience_group_details: Optional[AudienceGroupAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceGroupDetails') }})
    audio_content_type_details: Optional[AudioContentTypeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioContentTypeDetails') }})
    authorized_seller_status_details: Optional[AuthorizedSellerStatusAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedSellerStatusDetails') }})
    browser_details: Optional[BrowserAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserDetails') }})
    business_chain_details: Optional[BusinessChainAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessChainDetails') }})
    carrier_and_isp_details: Optional[CarrierAndIspAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierAndIspDetails') }})
    category_details: Optional[CategoryAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryDetails') }})
    channel_details: Optional[ChannelAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelDetails') }})
    content_duration_details: Optional[ContentDurationAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDurationDetails') }})
    content_genre_details: Optional[ContentGenreAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentGenreDetails') }})
    content_instream_position_details: Optional[ContentInstreamPositionAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentInstreamPositionDetails') }})
    content_outstream_position_details: Optional[ContentOutstreamPositionAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentOutstreamPositionDetails') }})
    content_stream_type_details: Optional[ContentStreamTypeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentStreamTypeDetails') }})
    day_and_time_details: Optional[DayAndTimeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayAndTimeDetails') }})
    device_make_model_details: Optional[DeviceMakeModelAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMakeModelDetails') }})
    device_type_details: Optional[DeviceTypeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTypeDetails') }})
    digital_content_label_exclusion_details: Optional[DigitalContentLabelAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digitalContentLabelExclusionDetails') }})
    environment_details: Optional[EnvironmentAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentDetails') }})
    exchange_details: Optional[ExchangeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeDetails') }})
    gender_details: Optional[GenderAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genderDetails') }})
    geo_region_details: Optional[GeoRegionAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoRegionDetails') }})
    household_income_details: Optional[HouseholdIncomeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('householdIncomeDetails') }})
    inheritance: Optional[AssignedTargetingOptionInheritanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritance') }})
    inventory_source_details: Optional[InventorySourceAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceDetails') }})
    inventory_source_group_details: Optional[InventorySourceGroupAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceGroupDetails') }})
    keyword_details: Optional[KeywordAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordDetails') }})
    language_details: Optional[LanguageAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageDetails') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    native_content_position_details: Optional[NativeContentPositionAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeContentPositionDetails') }})
    negative_keyword_list_details: Optional[NegativeKeywordListAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeKeywordListDetails') }})
    omid_details: Optional[OmidAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('omidDetails') }})
    on_screen_position_details: Optional[OnScreenPositionAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onScreenPositionDetails') }})
    operating_system_details: Optional[OperatingSystemAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemDetails') }})
    parental_status_details: Optional[ParentalStatusAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentalStatusDetails') }})
    poi_details: Optional[PoiAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poiDetails') }})
    proximity_location_list_details: Optional[ProximityLocationListAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityLocationListDetails') }})
    regional_location_list_details: Optional[RegionalLocationListAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalLocationListDetails') }})
    sensitive_category_exclusion_details: Optional[SensitiveCategoryAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveCategoryExclusionDetails') }})
    sub_exchange_details: Optional[SubExchangeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subExchangeDetails') }})
    targeting_type: Optional[AssignedTargetingOptionTargetingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingType') }})
    third_party_verifier_details: Optional[ThirdPartyVerifierAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyVerifierDetails') }})
    url_details: Optional[URLAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlDetails') }})
    user_rewarded_content_details: Optional[UserRewardedContentAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRewardedContentDetails') }})
    video_player_size_details: Optional[VideoPlayerSizeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoPlayerSizeDetails') }})
    viewability_details: Optional[ViewabilityAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewabilityDetails') }})
    
