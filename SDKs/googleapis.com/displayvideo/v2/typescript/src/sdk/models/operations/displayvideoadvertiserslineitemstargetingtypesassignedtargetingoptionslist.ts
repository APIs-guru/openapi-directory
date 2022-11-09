import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum {
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


export class DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" })
  advertiserId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lineItemId" })
  lineItemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=targetingType" })
  targetingType: DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
}


export class DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams;

  @Metadata()
  queryParams: DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams;

  @Metadata()
  security: DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity;
}


export class DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listLineItemAssignedTargetingOptionsResponse?: shared.ListLineItemAssignedTargetingOptionsResponse;

  @Metadata()
  statusCode: number;
}
