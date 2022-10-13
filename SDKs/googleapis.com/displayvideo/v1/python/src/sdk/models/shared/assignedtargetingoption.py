from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import agerangeassignedtargetingoptiondetails
from . import appcategoryassignedtargetingoptiondetails
from . import appassignedtargetingoptiondetails
from . import audiencegroupassignedtargetingoptiondetails
from . import audiocontenttypeassignedtargetingoptiondetails
from . import authorizedsellerstatusassignedtargetingoptiondetails
from . import browserassignedtargetingoptiondetails
from . import businesschainassignedtargetingoptiondetails
from . import carrierandispassignedtargetingoptiondetails
from . import categoryassignedtargetingoptiondetails
from . import channelassignedtargetingoptiondetails
from . import contentdurationassignedtargetingoptiondetails
from . import contentgenreassignedtargetingoptiondetails
from . import contentinstreampositionassignedtargetingoptiondetails
from . import contentoutstreampositionassignedtargetingoptiondetails
from . import contentstreamtypeassignedtargetingoptiondetails
from . import dayandtimeassignedtargetingoptiondetails
from . import devicemakemodelassignedtargetingoptiondetails
from . import devicetypeassignedtargetingoptiondetails
from . import digitalcontentlabelassignedtargetingoptiondetails
from . import environmentassignedtargetingoptiondetails
from . import exchangeassignedtargetingoptiondetails
from . import genderassignedtargetingoptiondetails
from . import georegionassignedtargetingoptiondetails
from . import householdincomeassignedtargetingoptiondetails
from . import inventorysourceassignedtargetingoptiondetails
from . import inventorysourcegroupassignedtargetingoptiondetails
from . import keywordassignedtargetingoptiondetails
from . import languageassignedtargetingoptiondetails
from . import nativecontentpositionassignedtargetingoptiondetails
from . import negativekeywordlistassignedtargetingoptiondetails
from . import omidassignedtargetingoptiondetails
from . import onscreenpositionassignedtargetingoptiondetails
from . import operatingsystemassignedtargetingoptiondetails
from . import parentalstatusassignedtargetingoptiondetails
from . import poiassignedtargetingoptiondetails
from . import proximitylocationlistassignedtargetingoptiondetails
from . import regionallocationlistassignedtargetingoptiondetails
from . import sensitivecategoryassignedtargetingoptiondetails
from . import subexchangeassignedtargetingoptiondetails
from . import thirdpartyverifierassignedtargetingoptiondetails
from . import urlassignedtargetingoptiondetails
from . import userrewardedcontentassignedtargetingoptiondetails
from . import videoplayersizeassignedtargetingoptiondetails
from . import viewabilityassignedtargetingoptiondetails

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
class AssignedTargetingOption:
    age_range_details: Optional[agerangeassignedtargetingoptiondetails.AgeRangeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageRangeDetails' }})
    app_category_details: Optional[appcategoryassignedtargetingoptiondetails.AppCategoryAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appCategoryDetails' }})
    app_details: Optional[appassignedtargetingoptiondetails.AppAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appDetails' }})
    assigned_targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignedTargetingOptionId' }})
    audience_group_details: Optional[audiencegroupassignedtargetingoptiondetails.AudienceGroupAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audienceGroupDetails' }})
    audio_content_type_details: Optional[audiocontenttypeassignedtargetingoptiondetails.AudioContentTypeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioContentTypeDetails' }})
    authorized_seller_status_details: Optional[authorizedsellerstatusassignedtargetingoptiondetails.AuthorizedSellerStatusAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedSellerStatusDetails' }})
    browser_details: Optional[browserassignedtargetingoptiondetails.BrowserAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browserDetails' }})
    business_chain_details: Optional[businesschainassignedtargetingoptiondetails.BusinessChainAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessChainDetails' }})
    carrier_and_isp_details: Optional[carrierandispassignedtargetingoptiondetails.CarrierAndIspAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrierAndIspDetails' }})
    category_details: Optional[categoryassignedtargetingoptiondetails.CategoryAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryDetails' }})
    channel_details: Optional[channelassignedtargetingoptiondetails.ChannelAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelDetails' }})
    content_duration_details: Optional[contentdurationassignedtargetingoptiondetails.ContentDurationAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDurationDetails' }})
    content_genre_details: Optional[contentgenreassignedtargetingoptiondetails.ContentGenreAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentGenreDetails' }})
    content_instream_position_details: Optional[contentinstreampositionassignedtargetingoptiondetails.ContentInstreamPositionAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentInstreamPositionDetails' }})
    content_outstream_position_details: Optional[contentoutstreampositionassignedtargetingoptiondetails.ContentOutstreamPositionAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentOutstreamPositionDetails' }})
    content_stream_type_details: Optional[contentstreamtypeassignedtargetingoptiondetails.ContentStreamTypeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentStreamTypeDetails' }})
    day_and_time_details: Optional[dayandtimeassignedtargetingoptiondetails.DayAndTimeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayAndTimeDetails' }})
    device_make_model_details: Optional[devicemakemodelassignedtargetingoptiondetails.DeviceMakeModelAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceMakeModelDetails' }})
    device_type_details: Optional[devicetypeassignedtargetingoptiondetails.DeviceTypeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceTypeDetails' }})
    digital_content_label_exclusion_details: Optional[digitalcontentlabelassignedtargetingoptiondetails.DigitalContentLabelAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digitalContentLabelExclusionDetails' }})
    environment_details: Optional[environmentassignedtargetingoptiondetails.EnvironmentAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentDetails' }})
    exchange_details: Optional[exchangeassignedtargetingoptiondetails.ExchangeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exchangeDetails' }})
    gender_details: Optional[genderassignedtargetingoptiondetails.GenderAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genderDetails' }})
    geo_region_details: Optional[georegionassignedtargetingoptiondetails.GeoRegionAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoRegionDetails' }})
    household_income_details: Optional[householdincomeassignedtargetingoptiondetails.HouseholdIncomeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'householdIncomeDetails' }})
    inheritance: Optional[AssignedTargetingOptionInheritanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inheritance' }})
    inventory_source_details: Optional[inventorysourceassignedtargetingoptiondetails.InventorySourceAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventorySourceDetails' }})
    inventory_source_group_details: Optional[inventorysourcegroupassignedtargetingoptiondetails.InventorySourceGroupAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventorySourceGroupDetails' }})
    keyword_details: Optional[keywordassignedtargetingoptiondetails.KeywordAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywordDetails' }})
    language_details: Optional[languageassignedtargetingoptiondetails.LanguageAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageDetails' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    native_content_position_details: Optional[nativecontentpositionassignedtargetingoptiondetails.NativeContentPositionAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nativeContentPositionDetails' }})
    negative_keyword_list_details: Optional[negativekeywordlistassignedtargetingoptiondetails.NegativeKeywordListAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negativeKeywordListDetails' }})
    omid_details: Optional[omidassignedtargetingoptiondetails.OmidAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'omidDetails' }})
    on_screen_position_details: Optional[onscreenpositionassignedtargetingoptiondetails.OnScreenPositionAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onScreenPositionDetails' }})
    operating_system_details: Optional[operatingsystemassignedtargetingoptiondetails.OperatingSystemAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingSystemDetails' }})
    parental_status_details: Optional[parentalstatusassignedtargetingoptiondetails.ParentalStatusAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentalStatusDetails' }})
    poi_details: Optional[poiassignedtargetingoptiondetails.PoiAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poiDetails' }})
    proximity_location_list_details: Optional[proximitylocationlistassignedtargetingoptiondetails.ProximityLocationListAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proximityLocationListDetails' }})
    regional_location_list_details: Optional[regionallocationlistassignedtargetingoptiondetails.RegionalLocationListAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalLocationListDetails' }})
    sensitive_category_exclusion_details: Optional[sensitivecategoryassignedtargetingoptiondetails.SensitiveCategoryAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sensitiveCategoryExclusionDetails' }})
    sub_exchange_details: Optional[subexchangeassignedtargetingoptiondetails.SubExchangeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subExchangeDetails' }})
    targeting_type: Optional[AssignedTargetingOptionTargetingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingType' }})
    third_party_verifier_details: Optional[thirdpartyverifierassignedtargetingoptiondetails.ThirdPartyVerifierAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirdPartyVerifierDetails' }})
    url_details: Optional[urlassignedtargetingoptiondetails.URLAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlDetails' }})
    user_rewarded_content_details: Optional[userrewardedcontentassignedtargetingoptiondetails.UserRewardedContentAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRewardedContentDetails' }})
    video_player_size_details: Optional[videoplayersizeassignedtargetingoptiondetails.VideoPlayerSizeAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoPlayerSizeDetails' }})
    viewability_details: Optional[viewabilityassignedtargetingoptiondetails.ViewabilityAssignedTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewabilityDetails' }})
    
