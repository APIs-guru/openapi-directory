import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeleteAssignedTargetingOptionsRequestTargetingTypeEnum {
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


// DeleteAssignedTargetingOptionsRequest
/** 
 * A request listing which assigned targeting options of a given targeting type should be deleted.
**/
export class DeleteAssignedTargetingOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedTargetingOptionIds" })
  assignedTargetingOptionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetingType" })
  targetingType?: DeleteAssignedTargetingOptionsRequestTargetingTypeEnum;
}
