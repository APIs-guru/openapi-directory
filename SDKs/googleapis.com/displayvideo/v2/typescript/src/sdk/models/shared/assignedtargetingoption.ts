import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AgeRangeAssignedTargetingOptionDetails } from "./agerangeassignedtargetingoptiondetails";
import { AppCategoryAssignedTargetingOptionDetails } from "./appcategoryassignedtargetingoptiondetails";
import { AppAssignedTargetingOptionDetails } from "./appassignedtargetingoptiondetails";
import { AudienceGroupAssignedTargetingOptionDetails } from "./audiencegroupassignedtargetingoptiondetails";
import { AudioContentTypeAssignedTargetingOptionDetails } from "./audiocontenttypeassignedtargetingoptiondetails";
import { AuthorizedSellerStatusAssignedTargetingOptionDetails } from "./authorizedsellerstatusassignedtargetingoptiondetails";
import { BrowserAssignedTargetingOptionDetails } from "./browserassignedtargetingoptiondetails";
import { BusinessChainAssignedTargetingOptionDetails } from "./businesschainassignedtargetingoptiondetails";
import { CarrierAndIspAssignedTargetingOptionDetails } from "./carrierandispassignedtargetingoptiondetails";
import { CategoryAssignedTargetingOptionDetails } from "./categoryassignedtargetingoptiondetails";
import { ChannelAssignedTargetingOptionDetails } from "./channelassignedtargetingoptiondetails";
import { ContentDurationAssignedTargetingOptionDetails } from "./contentdurationassignedtargetingoptiondetails";
import { ContentGenreAssignedTargetingOptionDetails } from "./contentgenreassignedtargetingoptiondetails";
import { ContentInstreamPositionAssignedTargetingOptionDetails } from "./contentinstreampositionassignedtargetingoptiondetails";
import { ContentOutstreamPositionAssignedTargetingOptionDetails } from "./contentoutstreampositionassignedtargetingoptiondetails";
import { ContentStreamTypeAssignedTargetingOptionDetails } from "./contentstreamtypeassignedtargetingoptiondetails";
import { DayAndTimeAssignedTargetingOptionDetails } from "./dayandtimeassignedtargetingoptiondetails";
import { DeviceMakeModelAssignedTargetingOptionDetails } from "./devicemakemodelassignedtargetingoptiondetails";
import { DeviceTypeAssignedTargetingOptionDetails } from "./devicetypeassignedtargetingoptiondetails";
import { DigitalContentLabelAssignedTargetingOptionDetails } from "./digitalcontentlabelassignedtargetingoptiondetails";
import { EnvironmentAssignedTargetingOptionDetails } from "./environmentassignedtargetingoptiondetails";
import { ExchangeAssignedTargetingOptionDetails } from "./exchangeassignedtargetingoptiondetails";
import { GenderAssignedTargetingOptionDetails } from "./genderassignedtargetingoptiondetails";
import { GeoRegionAssignedTargetingOptionDetails } from "./georegionassignedtargetingoptiondetails";
import { HouseholdIncomeAssignedTargetingOptionDetails } from "./householdincomeassignedtargetingoptiondetails";
import { InventorySourceAssignedTargetingOptionDetails } from "./inventorysourceassignedtargetingoptiondetails";
import { InventorySourceGroupAssignedTargetingOptionDetails } from "./inventorysourcegroupassignedtargetingoptiondetails";
import { KeywordAssignedTargetingOptionDetails } from "./keywordassignedtargetingoptiondetails";
import { LanguageAssignedTargetingOptionDetails } from "./languageassignedtargetingoptiondetails";
import { NativeContentPositionAssignedTargetingOptionDetails } from "./nativecontentpositionassignedtargetingoptiondetails";
import { NegativeKeywordListAssignedTargetingOptionDetails } from "./negativekeywordlistassignedtargetingoptiondetails";
import { OmidAssignedTargetingOptionDetails } from "./omidassignedtargetingoptiondetails";
import { OnScreenPositionAssignedTargetingOptionDetails } from "./onscreenpositionassignedtargetingoptiondetails";
import { OperatingSystemAssignedTargetingOptionDetails } from "./operatingsystemassignedtargetingoptiondetails";
import { ParentalStatusAssignedTargetingOptionDetails } from "./parentalstatusassignedtargetingoptiondetails";
import { PoiAssignedTargetingOptionDetails } from "./poiassignedtargetingoptiondetails";
import { ProximityLocationListAssignedTargetingOptionDetails } from "./proximitylocationlistassignedtargetingoptiondetails";
import { RegionalLocationListAssignedTargetingOptionDetails } from "./regionallocationlistassignedtargetingoptiondetails";
import { SensitiveCategoryAssignedTargetingOptionDetails } from "./sensitivecategoryassignedtargetingoptiondetails";
import { SubExchangeAssignedTargetingOptionDetails } from "./subexchangeassignedtargetingoptiondetails";
import { ThirdPartyVerifierAssignedTargetingOptionDetails } from "./thirdpartyverifierassignedtargetingoptiondetails";
import { UrlAssignedTargetingOptionDetails } from "./urlassignedtargetingoptiondetails";
import { UserRewardedContentAssignedTargetingOptionDetails } from "./userrewardedcontentassignedtargetingoptiondetails";
import { VideoPlayerSizeAssignedTargetingOptionDetails } from "./videoplayersizeassignedtargetingoptiondetails";
import { ViewabilityAssignedTargetingOptionDetails } from "./viewabilityassignedtargetingoptiondetails";

export enum AssignedTargetingOptionInheritanceEnum {
    InheritanceUnspecified = "INHERITANCE_UNSPECIFIED"
,    NotInherited = "NOT_INHERITED"
,    InheritedFromPartner = "INHERITED_FROM_PARTNER"
,    InheritedFromAdvertiser = "INHERITED_FROM_ADVERTISER"
}

export enum AssignedTargetingOptionTargetingTypeEnum {
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


// AssignedTargetingOption
/** 
 * A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
**/
export class AssignedTargetingOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=ageRangeDetails" })
  ageRangeDetails?: AgeRangeAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=appCategoryDetails" })
  appCategoryDetails?: AppCategoryAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=appDetails" })
  appDetails?: AppAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=assignedTargetingOptionId" })
  assignedTargetingOptionId?: string;

  @Metadata({ data: "json, name=audienceGroupDetails" })
  audienceGroupDetails?: AudienceGroupAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=audioContentTypeDetails" })
  audioContentTypeDetails?: AudioContentTypeAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=authorizedSellerStatusDetails" })
  authorizedSellerStatusDetails?: AuthorizedSellerStatusAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=browserDetails" })
  browserDetails?: BrowserAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=businessChainDetails" })
  businessChainDetails?: BusinessChainAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=carrierAndIspDetails" })
  carrierAndIspDetails?: CarrierAndIspAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=categoryDetails" })
  categoryDetails?: CategoryAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=channelDetails" })
  channelDetails?: ChannelAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=contentDurationDetails" })
  contentDurationDetails?: ContentDurationAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=contentGenreDetails" })
  contentGenreDetails?: ContentGenreAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=contentInstreamPositionDetails" })
  contentInstreamPositionDetails?: ContentInstreamPositionAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=contentOutstreamPositionDetails" })
  contentOutstreamPositionDetails?: ContentOutstreamPositionAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=contentStreamTypeDetails" })
  contentStreamTypeDetails?: ContentStreamTypeAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=dayAndTimeDetails" })
  dayAndTimeDetails?: DayAndTimeAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=deviceMakeModelDetails" })
  deviceMakeModelDetails?: DeviceMakeModelAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=deviceTypeDetails" })
  deviceTypeDetails?: DeviceTypeAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=digitalContentLabelExclusionDetails" })
  digitalContentLabelExclusionDetails?: DigitalContentLabelAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=environmentDetails" })
  environmentDetails?: EnvironmentAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=exchangeDetails" })
  exchangeDetails?: ExchangeAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=genderDetails" })
  genderDetails?: GenderAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=geoRegionDetails" })
  geoRegionDetails?: GeoRegionAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=householdIncomeDetails" })
  householdIncomeDetails?: HouseholdIncomeAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=inheritance" })
  inheritance?: AssignedTargetingOptionInheritanceEnum;

  @Metadata({ data: "json, name=inventorySourceDetails" })
  inventorySourceDetails?: InventorySourceAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=inventorySourceGroupDetails" })
  inventorySourceGroupDetails?: InventorySourceGroupAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=keywordDetails" })
  keywordDetails?: KeywordAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=languageDetails" })
  languageDetails?: LanguageAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nativeContentPositionDetails" })
  nativeContentPositionDetails?: NativeContentPositionAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=negativeKeywordListDetails" })
  negativeKeywordListDetails?: NegativeKeywordListAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=omidDetails" })
  omidDetails?: OmidAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=onScreenPositionDetails" })
  onScreenPositionDetails?: OnScreenPositionAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=operatingSystemDetails" })
  operatingSystemDetails?: OperatingSystemAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=parentalStatusDetails" })
  parentalStatusDetails?: ParentalStatusAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=poiDetails" })
  poiDetails?: PoiAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=proximityLocationListDetails" })
  proximityLocationListDetails?: ProximityLocationListAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=regionalLocationListDetails" })
  regionalLocationListDetails?: RegionalLocationListAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=sensitiveCategoryExclusionDetails" })
  sensitiveCategoryExclusionDetails?: SensitiveCategoryAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=subExchangeDetails" })
  subExchangeDetails?: SubExchangeAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=targetingType" })
  targetingType?: AssignedTargetingOptionTargetingTypeEnum;

  @Metadata({ data: "json, name=thirdPartyVerifierDetails" })
  thirdPartyVerifierDetails?: ThirdPartyVerifierAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=urlDetails" })
  urlDetails?: UrlAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=userRewardedContentDetails" })
  userRewardedContentDetails?: UserRewardedContentAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=videoPlayerSizeDetails" })
  videoPlayerSizeDetails?: VideoPlayerSizeAssignedTargetingOptionDetails;

  @Metadata({ data: "json, name=viewabilityDetails" })
  viewabilityDetails?: ViewabilityAssignedTargetingOptionDetails;
}
