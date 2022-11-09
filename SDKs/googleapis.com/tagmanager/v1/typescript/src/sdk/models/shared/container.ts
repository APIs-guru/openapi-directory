import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ContainerEnabledBuiltInVariableEnum {
    PageUrl = "pageUrl"
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
,    EnvironmentName = "environmentName"
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
}

export enum ContainerUsageContextEnum {
    Web = "web"
,    Android = "android"
,    Ios = "ios"
,    AndroidSdk5 = "androidSdk5"
,    IosSdk5 = "iosSdk5"
,    Amp = "amp"
}


// Container
/** 
 * Represents a Google Tag Manager Container.
**/
export class Container extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=domainName" })
  domainName?: string[];

  @Metadata({ data: "json, name=enabledBuiltInVariable" })
  enabledBuiltInVariable?: ContainerEnabledBuiltInVariableEnum[];

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=publicId" })
  publicId?: string;

  @Metadata({ data: "json, name=timeZoneCountryId" })
  timeZoneCountryId?: string;

  @Metadata({ data: "json, name=timeZoneId" })
  timeZoneId?: string;

  @Metadata({ data: "json, name=usageContext" })
  usageContext?: ContainerUsageContextEnum[];
}
