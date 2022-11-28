import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum {
    BuiltInVariableTypeUnspecified = "builtInVariableTypeUnspecified",
    PageUrl = "pageUrl",
    PageHostname = "pageHostname",
    PagePath = "pagePath",
    Referrer = "referrer",
    Event = "event",
    ClickElement = "clickElement",
    ClickClasses = "clickClasses",
    ClickId = "clickId",
    ClickTarget = "clickTarget",
    ClickUrl = "clickUrl",
    ClickText = "clickText",
    FirstPartyServingUrl = "firstPartyServingUrl",
    FormElement = "formElement",
    FormClasses = "formClasses",
    FormId = "formId",
    FormTarget = "formTarget",
    FormUrl = "formUrl",
    FormText = "formText",
    ErrorMessage = "errorMessage",
    ErrorUrl = "errorUrl",
    ErrorLine = "errorLine",
    NewHistoryUrl = "newHistoryUrl",
    OldHistoryUrl = "oldHistoryUrl",
    NewHistoryFragment = "newHistoryFragment",
    OldHistoryFragment = "oldHistoryFragment",
    NewHistoryState = "newHistoryState",
    OldHistoryState = "oldHistoryState",
    HistorySource = "historySource",
    ContainerVersion = "containerVersion",
    DebugMode = "debugMode",
    RandomNumber = "randomNumber",
    ContainerId = "containerId",
    AppId = "appId",
    AppName = "appName",
    AppVersionCode = "appVersionCode",
    AppVersionName = "appVersionName",
    Language = "language",
    OsVersion = "osVersion",
    Platform = "platform",
    SdkVersion = "sdkVersion",
    DeviceName = "deviceName",
    Resolution = "resolution",
    AdvertiserId = "advertiserId",
    AdvertisingTrackingEnabled = "advertisingTrackingEnabled",
    HtmlId = "htmlId",
    EnvironmentName = "environmentName",
    AmpBrowserLanguage = "ampBrowserLanguage",
    AmpCanonicalPath = "ampCanonicalPath",
    AmpCanonicalUrl = "ampCanonicalUrl",
    AmpCanonicalHost = "ampCanonicalHost",
    AmpReferrer = "ampReferrer",
    AmpTitle = "ampTitle",
    AmpClientId = "ampClientId",
    AmpClientTimezone = "ampClientTimezone",
    AmpClientTimestamp = "ampClientTimestamp",
    AmpClientScreenWidth = "ampClientScreenWidth",
    AmpClientScreenHeight = "ampClientScreenHeight",
    AmpClientScrollX = "ampClientScrollX",
    AmpClientScrollY = "ampClientScrollY",
    AmpClientMaxScrollX = "ampClientMaxScrollX",
    AmpClientMaxScrollY = "ampClientMaxScrollY",
    AmpTotalEngagedTime = "ampTotalEngagedTime",
    AmpPageViewId = "ampPageViewId",
    AmpPageLoadTime = "ampPageLoadTime",
    AmpPageDownloadTime = "ampPageDownloadTime",
    AmpGtmEvent = "ampGtmEvent",
    EventName = "eventName",
    FirebaseEventParameterCampaign = "firebaseEventParameterCampaign",
    FirebaseEventParameterCampaignAclid = "firebaseEventParameterCampaignAclid",
    FirebaseEventParameterCampaignAnid = "firebaseEventParameterCampaignAnid",
    FirebaseEventParameterCampaignClickTimestamp = "firebaseEventParameterCampaignClickTimestamp",
    FirebaseEventParameterCampaignContent = "firebaseEventParameterCampaignContent",
    FirebaseEventParameterCampaignCp1 = "firebaseEventParameterCampaignCp1",
    FirebaseEventParameterCampaignGclid = "firebaseEventParameterCampaignGclid",
    FirebaseEventParameterCampaignSource = "firebaseEventParameterCampaignSource",
    FirebaseEventParameterCampaignTerm = "firebaseEventParameterCampaignTerm",
    FirebaseEventParameterCurrency = "firebaseEventParameterCurrency",
    FirebaseEventParameterDynamicLinkAcceptTime = "firebaseEventParameterDynamicLinkAcceptTime",
    FirebaseEventParameterDynamicLinkLinkid = "firebaseEventParameterDynamicLinkLinkid",
    FirebaseEventParameterNotificationMessageDeviceTime = "firebaseEventParameterNotificationMessageDeviceTime",
    FirebaseEventParameterNotificationMessageId = "firebaseEventParameterNotificationMessageId",
    FirebaseEventParameterNotificationMessageName = "firebaseEventParameterNotificationMessageName",
    FirebaseEventParameterNotificationMessageTime = "firebaseEventParameterNotificationMessageTime",
    FirebaseEventParameterNotificationTopic = "firebaseEventParameterNotificationTopic",
    FirebaseEventParameterPreviousAppVersion = "firebaseEventParameterPreviousAppVersion",
    FirebaseEventParameterPreviousOsVersion = "firebaseEventParameterPreviousOsVersion",
    FirebaseEventParameterPrice = "firebaseEventParameterPrice",
    FirebaseEventParameterProductId = "firebaseEventParameterProductId",
    FirebaseEventParameterQuantity = "firebaseEventParameterQuantity",
    FirebaseEventParameterValue = "firebaseEventParameterValue",
    VideoProvider = "videoProvider",
    VideoUrl = "videoUrl",
    VideoTitle = "videoTitle",
    VideoDuration = "videoDuration",
    VideoPercent = "videoPercent",
    VideoVisible = "videoVisible",
    VideoStatus = "videoStatus",
    VideoCurrentTime = "videoCurrentTime",
    ScrollDepthThreshold = "scrollDepthThreshold",
    ScrollDepthUnits = "scrollDepthUnits",
    ScrollDepthDirection = "scrollDepthDirection",
    ElementVisibilityRatio = "elementVisibilityRatio",
    ElementVisibilityTime = "elementVisibilityTime",
    ElementVisibilityFirstTime = "elementVisibilityFirstTime",
    ElementVisibilityRecentTime = "elementVisibilityRecentTime",
    RequestPath = "requestPath",
    RequestMethod = "requestMethod",
    ClientName = "clientName",
    QueryString = "queryString",
    ServerPageLocationUrl = "serverPageLocationUrl",
    ServerPageLocationPath = "serverPageLocationPath",
    ServerPageLocationHostname = "serverPageLocationHostname"
}


export class TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams;

  @SpeakeasyMetadata()
  security: TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity;
}


export class TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createBuiltInVariableResponse?: shared.CreateBuiltInVariableResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
