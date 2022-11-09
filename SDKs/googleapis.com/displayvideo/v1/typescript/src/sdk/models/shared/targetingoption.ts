import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AgeRangeTargetingOptionDetails } from "./agerangetargetingoptiondetails";
import { AppCategoryTargetingOptionDetails } from "./appcategorytargetingoptiondetails";
import { AudioContentTypeTargetingOptionDetails } from "./audiocontenttypetargetingoptiondetails";
import { AuthorizedSellerStatusTargetingOptionDetails } from "./authorizedsellerstatustargetingoptiondetails";
import { BrowserTargetingOptionDetails } from "./browsertargetingoptiondetails";
import { BusinessChainTargetingOptionDetails } from "./businesschaintargetingoptiondetails";
import { CarrierAndIspTargetingOptionDetails } from "./carrierandisptargetingoptiondetails";
import { CategoryTargetingOptionDetails } from "./categorytargetingoptiondetails";
import { ContentDurationTargetingOptionDetails } from "./contentdurationtargetingoptiondetails";
import { ContentGenreTargetingOptionDetails } from "./contentgenretargetingoptiondetails";
import { ContentInstreamPositionTargetingOptionDetails } from "./contentinstreampositiontargetingoptiondetails";
import { ContentOutstreamPositionTargetingOptionDetails } from "./contentoutstreampositiontargetingoptiondetails";
import { ContentStreamTypeTargetingOptionDetails } from "./contentstreamtypetargetingoptiondetails";
import { DeviceMakeModelTargetingOptionDetails } from "./devicemakemodeltargetingoptiondetails";
import { DeviceTypeTargetingOptionDetails } from "./devicetypetargetingoptiondetails";
import { DigitalContentLabelTargetingOptionDetails } from "./digitalcontentlabeltargetingoptiondetails";
import { EnvironmentTargetingOptionDetails } from "./environmenttargetingoptiondetails";
import { ExchangeTargetingOptionDetails } from "./exchangetargetingoptiondetails";
import { GenderTargetingOptionDetails } from "./gendertargetingoptiondetails";
import { GeoRegionTargetingOptionDetails } from "./georegiontargetingoptiondetails";
import { HouseholdIncomeTargetingOptionDetails } from "./householdincometargetingoptiondetails";
import { LanguageTargetingOptionDetails } from "./languagetargetingoptiondetails";
import { NativeContentPositionTargetingOptionDetails } from "./nativecontentpositiontargetingoptiondetails";
import { OmidTargetingOptionDetails } from "./omidtargetingoptiondetails";
import { OnScreenPositionTargetingOptionDetails } from "./onscreenpositiontargetingoptiondetails";
import { OperatingSystemTargetingOptionDetails } from "./operatingsystemtargetingoptiondetails";
import { ParentalStatusTargetingOptionDetails } from "./parentalstatustargetingoptiondetails";
import { PoiTargetingOptionDetails } from "./poitargetingoptiondetails";
import { SensitiveCategoryTargetingOptionDetails } from "./sensitivecategorytargetingoptiondetails";
import { SubExchangeTargetingOptionDetails } from "./subexchangetargetingoptiondetails";
import { UserRewardedContentTargetingOptionDetails } from "./userrewardedcontenttargetingoptiondetails";
import { VideoPlayerSizeTargetingOptionDetails } from "./videoplayersizetargetingoptiondetails";
import { ViewabilityTargetingOptionDetails } from "./viewabilitytargetingoptiondetails";

export enum TargetingOptionTargetingTypeEnum {
    TargetingTypeUnspecified = "TARGETING_TYPE_UNSPECIFIED"
,    TargetingTypeChannel = "TARGETING_TYPE_CHANNEL"
,    TargetingTypeAppCategory = "TARGETING_TYPE_APP_CATEGORY"
,    TargetingTypeApp = "TARGETING_TYPE_APP"
,    TargetingTypeUrl = "TARGETING_TYPE_URL"
,    TargetingTypeDayAndTime = "TARGETING_TYPE_DAY_AND_TIME"
,    TargetingTypeAgeRange = "TARGETING_TYPE_AGE_RANGE"
,    TargetingTypeRegionalLocationList = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
,    TargetingTypeProximityLocationList = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
,    TargetingTypeGender = "TARGETING_TYPE_GENDER"
,    TargetingTypeVideoPlayerSize = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
,    TargetingTypeUserRewardedContent = "TARGETING_TYPE_USER_REWARDED_CONTENT"
,    TargetingTypeParentalStatus = "TARGETING_TYPE_PARENTAL_STATUS"
,    TargetingTypeContentInstreamPosition = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
,    TargetingTypeContentOutstreamPosition = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
,    TargetingTypeDeviceType = "TARGETING_TYPE_DEVICE_TYPE"
,    TargetingTypeAudienceGroup = "TARGETING_TYPE_AUDIENCE_GROUP"
,    TargetingTypeBrowser = "TARGETING_TYPE_BROWSER"
,    TargetingTypeHouseholdIncome = "TARGETING_TYPE_HOUSEHOLD_INCOME"
,    TargetingTypeOnScreenPosition = "TARGETING_TYPE_ON_SCREEN_POSITION"
,    TargetingTypeThirdPartyVerifier = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
,    TargetingTypeDigitalContentLabelExclusion = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
,    TargetingTypeSensitiveCategoryExclusion = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
,    TargetingTypeEnvironment = "TARGETING_TYPE_ENVIRONMENT"
,    TargetingTypeCarrierAndIsp = "TARGETING_TYPE_CARRIER_AND_ISP"
,    TargetingTypeOperatingSystem = "TARGETING_TYPE_OPERATING_SYSTEM"
,    TargetingTypeDeviceMakeModel = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
,    TargetingTypeKeyword = "TARGETING_TYPE_KEYWORD"
,    TargetingTypeNegativeKeywordList = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
,    TargetingTypeViewability = "TARGETING_TYPE_VIEWABILITY"
,    TargetingTypeCategory = "TARGETING_TYPE_CATEGORY"
,    TargetingTypeInventorySource = "TARGETING_TYPE_INVENTORY_SOURCE"
,    TargetingTypeLanguage = "TARGETING_TYPE_LANGUAGE"
,    TargetingTypeAuthorizedSellerStatus = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
,    TargetingTypeGeoRegion = "TARGETING_TYPE_GEO_REGION"
,    TargetingTypeInventorySourceGroup = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
,    TargetingTypeExchange = "TARGETING_TYPE_EXCHANGE"
,    TargetingTypeSubExchange = "TARGETING_TYPE_SUB_EXCHANGE"
,    TargetingTypePoi = "TARGETING_TYPE_POI"
,    TargetingTypeBusinessChain = "TARGETING_TYPE_BUSINESS_CHAIN"
,    TargetingTypeContentDuration = "TARGETING_TYPE_CONTENT_DURATION"
,    TargetingTypeContentStreamType = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
,    TargetingTypeNativeContentPosition = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
,    TargetingTypeOmid = "TARGETING_TYPE_OMID"
,    TargetingTypeAudioContentType = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
,    TargetingTypeContentGenre = "TARGETING_TYPE_CONTENT_GENRE"
}


// TargetingOption
/** 
 * Represents a single targeting option, which is a targetable concept in DV360.
**/
export class TargetingOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=ageRangeDetails" })
  ageRangeDetails?: AgeRangeTargetingOptionDetails;

  @Metadata({ data: "json, name=appCategoryDetails" })
  appCategoryDetails?: AppCategoryTargetingOptionDetails;

  @Metadata({ data: "json, name=audioContentTypeDetails" })
  audioContentTypeDetails?: AudioContentTypeTargetingOptionDetails;

  @Metadata({ data: "json, name=authorizedSellerStatusDetails" })
  authorizedSellerStatusDetails?: AuthorizedSellerStatusTargetingOptionDetails;

  @Metadata({ data: "json, name=browserDetails" })
  browserDetails?: BrowserTargetingOptionDetails;

  @Metadata({ data: "json, name=businessChainDetails" })
  businessChainDetails?: BusinessChainTargetingOptionDetails;

  @Metadata({ data: "json, name=carrierAndIspDetails" })
  carrierAndIspDetails?: CarrierAndIspTargetingOptionDetails;

  @Metadata({ data: "json, name=categoryDetails" })
  categoryDetails?: CategoryTargetingOptionDetails;

  @Metadata({ data: "json, name=contentDurationDetails" })
  contentDurationDetails?: ContentDurationTargetingOptionDetails;

  @Metadata({ data: "json, name=contentGenreDetails" })
  contentGenreDetails?: ContentGenreTargetingOptionDetails;

  @Metadata({ data: "json, name=contentInstreamPositionDetails" })
  contentInstreamPositionDetails?: ContentInstreamPositionTargetingOptionDetails;

  @Metadata({ data: "json, name=contentOutstreamPositionDetails" })
  contentOutstreamPositionDetails?: ContentOutstreamPositionTargetingOptionDetails;

  @Metadata({ data: "json, name=contentStreamTypeDetails" })
  contentStreamTypeDetails?: ContentStreamTypeTargetingOptionDetails;

  @Metadata({ data: "json, name=deviceMakeModelDetails" })
  deviceMakeModelDetails?: DeviceMakeModelTargetingOptionDetails;

  @Metadata({ data: "json, name=deviceTypeDetails" })
  deviceTypeDetails?: DeviceTypeTargetingOptionDetails;

  @Metadata({ data: "json, name=digitalContentLabelDetails" })
  digitalContentLabelDetails?: DigitalContentLabelTargetingOptionDetails;

  @Metadata({ data: "json, name=environmentDetails" })
  environmentDetails?: EnvironmentTargetingOptionDetails;

  @Metadata({ data: "json, name=exchangeDetails" })
  exchangeDetails?: ExchangeTargetingOptionDetails;

  @Metadata({ data: "json, name=genderDetails" })
  genderDetails?: GenderTargetingOptionDetails;

  @Metadata({ data: "json, name=geoRegionDetails" })
  geoRegionDetails?: GeoRegionTargetingOptionDetails;

  @Metadata({ data: "json, name=householdIncomeDetails" })
  householdIncomeDetails?: HouseholdIncomeTargetingOptionDetails;

  @Metadata({ data: "json, name=languageDetails" })
  languageDetails?: LanguageTargetingOptionDetails;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nativeContentPositionDetails" })
  nativeContentPositionDetails?: NativeContentPositionTargetingOptionDetails;

  @Metadata({ data: "json, name=omidDetails" })
  omidDetails?: OmidTargetingOptionDetails;

  @Metadata({ data: "json, name=onScreenPositionDetails" })
  onScreenPositionDetails?: OnScreenPositionTargetingOptionDetails;

  @Metadata({ data: "json, name=operatingSystemDetails" })
  operatingSystemDetails?: OperatingSystemTargetingOptionDetails;

  @Metadata({ data: "json, name=parentalStatusDetails" })
  parentalStatusDetails?: ParentalStatusTargetingOptionDetails;

  @Metadata({ data: "json, name=poiDetails" })
  poiDetails?: PoiTargetingOptionDetails;

  @Metadata({ data: "json, name=sensitiveCategoryDetails" })
  sensitiveCategoryDetails?: SensitiveCategoryTargetingOptionDetails;

  @Metadata({ data: "json, name=subExchangeDetails" })
  subExchangeDetails?: SubExchangeTargetingOptionDetails;

  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;

  @Metadata({ data: "json, name=targetingType" })
  targetingType?: TargetingOptionTargetingTypeEnum;

  @Metadata({ data: "json, name=userRewardedContentDetails" })
  userRewardedContentDetails?: UserRewardedContentTargetingOptionDetails;

  @Metadata({ data: "json, name=videoPlayerSizeDetails" })
  videoPlayerSizeDetails?: VideoPlayerSizeTargetingOptionDetails;

  @Metadata({ data: "json, name=viewabilityDetails" })
  viewabilityDetails?: ViewabilityTargetingOptionDetails;
}
