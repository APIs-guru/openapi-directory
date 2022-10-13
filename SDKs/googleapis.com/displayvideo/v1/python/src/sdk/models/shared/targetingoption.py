from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import agerangetargetingoptiondetails
from . import appcategorytargetingoptiondetails
from . import audiocontenttypetargetingoptiondetails
from . import authorizedsellerstatustargetingoptiondetails
from . import browsertargetingoptiondetails
from . import businesschaintargetingoptiondetails
from . import carrierandisptargetingoptiondetails
from . import categorytargetingoptiondetails
from . import contentdurationtargetingoptiondetails
from . import contentgenretargetingoptiondetails
from . import contentinstreampositiontargetingoptiondetails
from . import contentoutstreampositiontargetingoptiondetails
from . import contentstreamtypetargetingoptiondetails
from . import devicemakemodeltargetingoptiondetails
from . import devicetypetargetingoptiondetails
from . import digitalcontentlabeltargetingoptiondetails
from . import environmenttargetingoptiondetails
from . import exchangetargetingoptiondetails
from . import gendertargetingoptiondetails
from . import georegiontargetingoptiondetails
from . import householdincometargetingoptiondetails
from . import languagetargetingoptiondetails
from . import nativecontentpositiontargetingoptiondetails
from . import omidtargetingoptiondetails
from . import onscreenpositiontargetingoptiondetails
from . import operatingsystemtargetingoptiondetails
from . import parentalstatustargetingoptiondetails
from . import poitargetingoptiondetails
from . import sensitivecategorytargetingoptiondetails
from . import subexchangetargetingoptiondetails
from . import userrewardedcontenttargetingoptiondetails
from . import videoplayersizetargetingoptiondetails
from . import viewabilitytargetingoptiondetails

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
    age_range_details: Optional[agerangetargetingoptiondetails.AgeRangeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageRangeDetails' }})
    app_category_details: Optional[appcategorytargetingoptiondetails.AppCategoryTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appCategoryDetails' }})
    audio_content_type_details: Optional[audiocontenttypetargetingoptiondetails.AudioContentTypeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioContentTypeDetails' }})
    authorized_seller_status_details: Optional[authorizedsellerstatustargetingoptiondetails.AuthorizedSellerStatusTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedSellerStatusDetails' }})
    browser_details: Optional[browsertargetingoptiondetails.BrowserTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browserDetails' }})
    business_chain_details: Optional[businesschaintargetingoptiondetails.BusinessChainTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessChainDetails' }})
    carrier_and_isp_details: Optional[carrierandisptargetingoptiondetails.CarrierAndIspTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrierAndIspDetails' }})
    category_details: Optional[categorytargetingoptiondetails.CategoryTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryDetails' }})
    content_duration_details: Optional[contentdurationtargetingoptiondetails.ContentDurationTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDurationDetails' }})
    content_genre_details: Optional[contentgenretargetingoptiondetails.ContentGenreTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentGenreDetails' }})
    content_instream_position_details: Optional[contentinstreampositiontargetingoptiondetails.ContentInstreamPositionTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentInstreamPositionDetails' }})
    content_outstream_position_details: Optional[contentoutstreampositiontargetingoptiondetails.ContentOutstreamPositionTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentOutstreamPositionDetails' }})
    content_stream_type_details: Optional[contentstreamtypetargetingoptiondetails.ContentStreamTypeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentStreamTypeDetails' }})
    device_make_model_details: Optional[devicemakemodeltargetingoptiondetails.DeviceMakeModelTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceMakeModelDetails' }})
    device_type_details: Optional[devicetypetargetingoptiondetails.DeviceTypeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceTypeDetails' }})
    digital_content_label_details: Optional[digitalcontentlabeltargetingoptiondetails.DigitalContentLabelTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digitalContentLabelDetails' }})
    environment_details: Optional[environmenttargetingoptiondetails.EnvironmentTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentDetails' }})
    exchange_details: Optional[exchangetargetingoptiondetails.ExchangeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exchangeDetails' }})
    gender_details: Optional[gendertargetingoptiondetails.GenderTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genderDetails' }})
    geo_region_details: Optional[georegiontargetingoptiondetails.GeoRegionTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoRegionDetails' }})
    household_income_details: Optional[householdincometargetingoptiondetails.HouseholdIncomeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'householdIncomeDetails' }})
    language_details: Optional[languagetargetingoptiondetails.LanguageTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageDetails' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    native_content_position_details: Optional[nativecontentpositiontargetingoptiondetails.NativeContentPositionTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nativeContentPositionDetails' }})
    omid_details: Optional[omidtargetingoptiondetails.OmidTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'omidDetails' }})
    on_screen_position_details: Optional[onscreenpositiontargetingoptiondetails.OnScreenPositionTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onScreenPositionDetails' }})
    operating_system_details: Optional[operatingsystemtargetingoptiondetails.OperatingSystemTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingSystemDetails' }})
    parental_status_details: Optional[parentalstatustargetingoptiondetails.ParentalStatusTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentalStatusDetails' }})
    poi_details: Optional[poitargetingoptiondetails.PoiTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poiDetails' }})
    sensitive_category_details: Optional[sensitivecategorytargetingoptiondetails.SensitiveCategoryTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sensitiveCategoryDetails' }})
    sub_exchange_details: Optional[subexchangetargetingoptiondetails.SubExchangeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subExchangeDetails' }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingOptionId' }})
    targeting_type: Optional[TargetingOptionTargetingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingType' }})
    user_rewarded_content_details: Optional[userrewardedcontenttargetingoptiondetails.UserRewardedContentTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRewardedContentDetails' }})
    video_player_size_details: Optional[videoplayersizetargetingoptiondetails.VideoPlayerSizeTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoPlayerSizeDetails' }})
    viewability_details: Optional[viewabilitytargetingoptiondetails.ViewabilityTargetingOptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewabilityDetails' }})
    
