import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
    TargetingTypeUnspecified = "TARGETING_TYPE_UNSPECIFIED",
    TargetingTypeChannel = "TARGETING_TYPE_CHANNEL",
    TargetingTypeAppCategory = "TARGETING_TYPE_APP_CATEGORY",
    TargetingTypeApp = "TARGETING_TYPE_APP",
    TargetingTypeUrl = "TARGETING_TYPE_URL",
    TargetingTypeDayAndTime = "TARGETING_TYPE_DAY_AND_TIME",
    TargetingTypeAgeRange = "TARGETING_TYPE_AGE_RANGE",
    TargetingTypeRegionalLocationList = "TARGETING_TYPE_REGIONAL_LOCATION_LIST",
    TargetingTypeProximityLocationList = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST",
    TargetingTypeGender = "TARGETING_TYPE_GENDER",
    TargetingTypeVideoPlayerSize = "TARGETING_TYPE_VIDEO_PLAYER_SIZE",
    TargetingTypeUserRewardedContent = "TARGETING_TYPE_USER_REWARDED_CONTENT",
    TargetingTypeParentalStatus = "TARGETING_TYPE_PARENTAL_STATUS",
    TargetingTypeContentInstreamPosition = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION",
    TargetingTypeContentOutstreamPosition = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION",
    TargetingTypeDeviceType = "TARGETING_TYPE_DEVICE_TYPE",
    TargetingTypeAudienceGroup = "TARGETING_TYPE_AUDIENCE_GROUP",
    TargetingTypeBrowser = "TARGETING_TYPE_BROWSER",
    TargetingTypeHouseholdIncome = "TARGETING_TYPE_HOUSEHOLD_INCOME",
    TargetingTypeOnScreenPosition = "TARGETING_TYPE_ON_SCREEN_POSITION",
    TargetingTypeThirdPartyVerifier = "TARGETING_TYPE_THIRD_PARTY_VERIFIER",
    TargetingTypeDigitalContentLabelExclusion = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION",
    TargetingTypeSensitiveCategoryExclusion = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION",
    TargetingTypeEnvironment = "TARGETING_TYPE_ENVIRONMENT",
    TargetingTypeCarrierAndIsp = "TARGETING_TYPE_CARRIER_AND_ISP",
    TargetingTypeOperatingSystem = "TARGETING_TYPE_OPERATING_SYSTEM",
    TargetingTypeDeviceMakeModel = "TARGETING_TYPE_DEVICE_MAKE_MODEL",
    TargetingTypeKeyword = "TARGETING_TYPE_KEYWORD",
    TargetingTypeNegativeKeywordList = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST",
    TargetingTypeViewability = "TARGETING_TYPE_VIEWABILITY",
    TargetingTypeCategory = "TARGETING_TYPE_CATEGORY",
    TargetingTypeInventorySource = "TARGETING_TYPE_INVENTORY_SOURCE",
    TargetingTypeLanguage = "TARGETING_TYPE_LANGUAGE",
    TargetingTypeAuthorizedSellerStatus = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS",
    TargetingTypeGeoRegion = "TARGETING_TYPE_GEO_REGION",
    TargetingTypeInventorySourceGroup = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP",
    TargetingTypeExchange = "TARGETING_TYPE_EXCHANGE",
    TargetingTypeSubExchange = "TARGETING_TYPE_SUB_EXCHANGE",
    TargetingTypePoi = "TARGETING_TYPE_POI",
    TargetingTypeBusinessChain = "TARGETING_TYPE_BUSINESS_CHAIN",
    TargetingTypeContentDuration = "TARGETING_TYPE_CONTENT_DURATION",
    TargetingTypeContentStreamType = "TARGETING_TYPE_CONTENT_STREAM_TYPE",
    TargetingTypeNativeContentPosition = "TARGETING_TYPE_NATIVE_CONTENT_POSITION",
    TargetingTypeOmid = "TARGETING_TYPE_OMID",
    TargetingTypeAudioContentType = "TARGETING_TYPE_AUDIO_CONTENT_TYPE",
    TargetingTypeContentGenre = "TARGETING_TYPE_CONTENT_GENRE"
}


// TargetingOption
/** 
 * Represents a single targeting option, which is a targetable concept in DV360.
**/
export class TargetingOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ageRangeDetails" })
  ageRangeDetails?: AgeRangeTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=appCategoryDetails" })
  appCategoryDetails?: AppCategoryTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=audioContentTypeDetails" })
  audioContentTypeDetails?: AudioContentTypeTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=authorizedSellerStatusDetails" })
  authorizedSellerStatusDetails?: AuthorizedSellerStatusTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=browserDetails" })
  browserDetails?: BrowserTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=businessChainDetails" })
  businessChainDetails?: BusinessChainTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=carrierAndIspDetails" })
  carrierAndIspDetails?: CarrierAndIspTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=categoryDetails" })
  categoryDetails?: CategoryTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=contentDurationDetails" })
  contentDurationDetails?: ContentDurationTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=contentGenreDetails" })
  contentGenreDetails?: ContentGenreTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=contentInstreamPositionDetails" })
  contentInstreamPositionDetails?: ContentInstreamPositionTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=contentOutstreamPositionDetails" })
  contentOutstreamPositionDetails?: ContentOutstreamPositionTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=contentStreamTypeDetails" })
  contentStreamTypeDetails?: ContentStreamTypeTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=deviceMakeModelDetails" })
  deviceMakeModelDetails?: DeviceMakeModelTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=deviceTypeDetails" })
  deviceTypeDetails?: DeviceTypeTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=digitalContentLabelDetails" })
  digitalContentLabelDetails?: DigitalContentLabelTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=environmentDetails" })
  environmentDetails?: EnvironmentTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=exchangeDetails" })
  exchangeDetails?: ExchangeTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=genderDetails" })
  genderDetails?: GenderTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=geoRegionDetails" })
  geoRegionDetails?: GeoRegionTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=householdIncomeDetails" })
  householdIncomeDetails?: HouseholdIncomeTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=languageDetails" })
  languageDetails?: LanguageTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nativeContentPositionDetails" })
  nativeContentPositionDetails?: NativeContentPositionTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=omidDetails" })
  omidDetails?: OmidTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=onScreenPositionDetails" })
  onScreenPositionDetails?: OnScreenPositionTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=operatingSystemDetails" })
  operatingSystemDetails?: OperatingSystemTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=parentalStatusDetails" })
  parentalStatusDetails?: ParentalStatusTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=poiDetails" })
  poiDetails?: PoiTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=sensitiveCategoryDetails" })
  sensitiveCategoryDetails?: SensitiveCategoryTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=subExchangeDetails" })
  subExchangeDetails?: SubExchangeTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetingType" })
  targetingType?: TargetingOptionTargetingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userRewardedContentDetails" })
  userRewardedContentDetails?: UserRewardedContentTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=videoPlayerSizeDetails" })
  videoPlayerSizeDetails?: VideoPlayerSizeTargetingOptionDetails;

  @SpeakeasyMetadata({ data: "json, name=viewabilityDetails" })
  viewabilityDetails?: ViewabilityTargetingOptionDetails;
}
