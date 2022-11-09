import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagmanagerAccountsUserPermissionsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}

export enum TagmanagerAccountsUserPermissionsDeleteTypeEnum {
    BuiltInVariableTypeUnspecified = "builtInVariableTypeUnspecified"
,    PageUrl = "pageUrl"
,    PageHostname = "pageHostname"
,    PagePath = "pagePath"
,    Referrer = "referrer"
,    Event = "event"
,    ClickElement = "clickElement"
,    ClickClasses = "clickClasses"
,    ClickId = "clickId"
,    ClickTarget = "clickTarget"
,    ClickUrl = "clickUrl"
,    ClickText = "clickText"
,    FirstPartyServingUrl = "firstPartyServingUrl"
,    FormElement = "formElement"
,    FormClasses = "formClasses"
,    FormId = "formId"
,    FormTarget = "formTarget"
,    FormUrl = "formUrl"
,    FormText = "formText"
,    ErrorMessage = "errorMessage"
,    ErrorUrl = "errorUrl"
,    ErrorLine = "errorLine"
,    NewHistoryUrl = "newHistoryUrl"
,    OldHistoryUrl = "oldHistoryUrl"
,    NewHistoryFragment = "newHistoryFragment"
,    OldHistoryFragment = "oldHistoryFragment"
,    NewHistoryState = "newHistoryState"
,    OldHistoryState = "oldHistoryState"
,    HistorySource = "historySource"
,    ContainerVersion = "containerVersion"
,    DebugMode = "debugMode"
,    RandomNumber = "randomNumber"
,    ContainerId = "containerId"
,    AppId = "appId"
,    AppName = "appName"
,    AppVersionCode = "appVersionCode"
,    AppVersionName = "appVersionName"
,    Language = "language"
,    OsVersion = "osVersion"
,    Platform = "platform"
,    SdkVersion = "sdkVersion"
,    DeviceName = "deviceName"
,    Resolution = "resolution"
,    AdvertiserId = "advertiserId"
,    AdvertisingTrackingEnabled = "advertisingTrackingEnabled"
,    HtmlId = "htmlId"
,    EnvironmentName = "environmentName"
,    AmpBrowserLanguage = "ampBrowserLanguage"
,    AmpCanonicalPath = "ampCanonicalPath"
,    AmpCanonicalUrl = "ampCanonicalUrl"
,    AmpCanonicalHost = "ampCanonicalHost"
,    AmpReferrer = "ampReferrer"
,    AmpTitle = "ampTitle"
,    AmpClientId = "ampClientId"
,    AmpClientTimezone = "ampClientTimezone"
,    AmpClientTimestamp = "ampClientTimestamp"
,    AmpClientScreenWidth = "ampClientScreenWidth"
,    AmpClientScreenHeight = "ampClientScreenHeight"
,    AmpClientScrollX = "ampClientScrollX"
,    AmpClientScrollY = "ampClientScrollY"
,    AmpClientMaxScrollX = "ampClientMaxScrollX"
,    AmpClientMaxScrollY = "ampClientMaxScrollY"
,    AmpTotalEngagedTime = "ampTotalEngagedTime"
,    AmpPageViewId = "ampPageViewId"
,    AmpPageLoadTime = "ampPageLoadTime"
,    AmpPageDownloadTime = "ampPageDownloadTime"
,    AmpGtmEvent = "ampGtmEvent"
,    EventName = "eventName"
,    FirebaseEventParameterCampaign = "firebaseEventParameterCampaign"
,    FirebaseEventParameterCampaignAclid = "firebaseEventParameterCampaignAclid"
,    FirebaseEventParameterCampaignAnid = "firebaseEventParameterCampaignAnid"
,    FirebaseEventParameterCampaignClickTimestamp = "firebaseEventParameterCampaignClickTimestamp"
,    FirebaseEventParameterCampaignContent = "firebaseEventParameterCampaignContent"
,    FirebaseEventParameterCampaignCp1 = "firebaseEventParameterCampaignCp1"
,    FirebaseEventParameterCampaignGclid = "firebaseEventParameterCampaignGclid"
,    FirebaseEventParameterCampaignSource = "firebaseEventParameterCampaignSource"
,    FirebaseEventParameterCampaignTerm = "firebaseEventParameterCampaignTerm"
,    FirebaseEventParameterCurrency = "firebaseEventParameterCurrency"
,    FirebaseEventParameterDynamicLinkAcceptTime = "firebaseEventParameterDynamicLinkAcceptTime"
,    FirebaseEventParameterDynamicLinkLinkid = "firebaseEventParameterDynamicLinkLinkid"
,    FirebaseEventParameterNotificationMessageDeviceTime = "firebaseEventParameterNotificationMessageDeviceTime"
,    FirebaseEventParameterNotificationMessageId = "firebaseEventParameterNotificationMessageId"
,    FirebaseEventParameterNotificationMessageName = "firebaseEventParameterNotificationMessageName"
,    FirebaseEventParameterNotificationMessageTime = "firebaseEventParameterNotificationMessageTime"
,    FirebaseEventParameterNotificationTopic = "firebaseEventParameterNotificationTopic"
,    FirebaseEventParameterPreviousAppVersion = "firebaseEventParameterPreviousAppVersion"
,    FirebaseEventParameterPreviousOsVersion = "firebaseEventParameterPreviousOsVersion"
,    FirebaseEventParameterPrice = "firebaseEventParameterPrice"
,    FirebaseEventParameterProductId = "firebaseEventParameterProductId"
,    FirebaseEventParameterQuantity = "firebaseEventParameterQuantity"
,    FirebaseEventParameterValue = "firebaseEventParameterValue"
,    VideoProvider = "videoProvider"
,    VideoUrl = "videoUrl"
,    VideoTitle = "videoTitle"
,    VideoDuration = "videoDuration"
,    VideoPercent = "videoPercent"
,    VideoVisible = "videoVisible"
,    VideoStatus = "videoStatus"
,    VideoCurrentTime = "videoCurrentTime"
,    ScrollDepthThreshold = "scrollDepthThreshold"
,    ScrollDepthUnits = "scrollDepthUnits"
,    ScrollDepthDirection = "scrollDepthDirection"
,    ElementVisibilityRatio = "elementVisibilityRatio"
,    ElementVisibilityTime = "elementVisibilityTime"
,    ElementVisibilityFirstTime = "elementVisibilityFirstTime"
,    ElementVisibilityRecentTime = "elementVisibilityRecentTime"
,    RequestPath = "requestPath"
,    RequestMethod = "requestMethod"
,    ClientName = "clientName"
,    QueryString = "queryString"
,    ServerPageLocationUrl = "serverPageLocationUrl"
,    ServerPageLocationPath = "serverPageLocationPath"
,    ServerPageLocationHostname = "serverPageLocationHostname"
}


export class TagmanagerAccountsUserPermissionsDeleteQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: TagmanagerAccountsUserPermissionsDeleteTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class TagmanagerAccountsUserPermissionsDeleteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TagmanagerAccountsUserPermissionsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagmanagerAccountsUserPermissionsDeletePathParams;

  @Metadata()
  queryParams: TagmanagerAccountsUserPermissionsDeleteQueryParams;

  @Metadata()
  security: TagmanagerAccountsUserPermissionsDeleteSecurity;
}


export class TagmanagerAccountsUserPermissionsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
