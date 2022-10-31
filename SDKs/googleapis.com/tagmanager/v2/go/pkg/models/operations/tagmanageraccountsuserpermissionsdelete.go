package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsUserPermissionsDeletePathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type TagmanagerAccountsUserPermissionsDeleteTypeEnum string

const (
	TagmanagerAccountsUserPermissionsDeleteTypeEnumBuiltInVariableTypeUnspecified                      TagmanagerAccountsUserPermissionsDeleteTypeEnum = "builtInVariableTypeUnspecified"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumPageURL                                             TagmanagerAccountsUserPermissionsDeleteTypeEnum = "pageUrl"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumPageHostname                                        TagmanagerAccountsUserPermissionsDeleteTypeEnum = "pageHostname"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumPagePath                                            TagmanagerAccountsUserPermissionsDeleteTypeEnum = "pagePath"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumReferrer                                            TagmanagerAccountsUserPermissionsDeleteTypeEnum = "referrer"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumEvent                                               TagmanagerAccountsUserPermissionsDeleteTypeEnum = "event"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumClickElement                                        TagmanagerAccountsUserPermissionsDeleteTypeEnum = "clickElement"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumClickClasses                                        TagmanagerAccountsUserPermissionsDeleteTypeEnum = "clickClasses"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumClickID                                             TagmanagerAccountsUserPermissionsDeleteTypeEnum = "clickId"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumClickTarget                                         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "clickTarget"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumClickURL                                            TagmanagerAccountsUserPermissionsDeleteTypeEnum = "clickUrl"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumClickText                                           TagmanagerAccountsUserPermissionsDeleteTypeEnum = "clickText"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirstPartyServingURL                                TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firstPartyServingUrl"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFormElement                                         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "formElement"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFormClasses                                         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "formClasses"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFormID                                              TagmanagerAccountsUserPermissionsDeleteTypeEnum = "formId"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFormTarget                                          TagmanagerAccountsUserPermissionsDeleteTypeEnum = "formTarget"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFormURL                                             TagmanagerAccountsUserPermissionsDeleteTypeEnum = "formUrl"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFormText                                            TagmanagerAccountsUserPermissionsDeleteTypeEnum = "formText"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumErrorMessage                                        TagmanagerAccountsUserPermissionsDeleteTypeEnum = "errorMessage"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumErrorURL                                            TagmanagerAccountsUserPermissionsDeleteTypeEnum = "errorUrl"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumErrorLine                                           TagmanagerAccountsUserPermissionsDeleteTypeEnum = "errorLine"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumNewHistoryURL                                       TagmanagerAccountsUserPermissionsDeleteTypeEnum = "newHistoryUrl"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumOldHistoryURL                                       TagmanagerAccountsUserPermissionsDeleteTypeEnum = "oldHistoryUrl"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumNewHistoryFragment                                  TagmanagerAccountsUserPermissionsDeleteTypeEnum = "newHistoryFragment"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumOldHistoryFragment                                  TagmanagerAccountsUserPermissionsDeleteTypeEnum = "oldHistoryFragment"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumNewHistoryState                                     TagmanagerAccountsUserPermissionsDeleteTypeEnum = "newHistoryState"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumOldHistoryState                                     TagmanagerAccountsUserPermissionsDeleteTypeEnum = "oldHistoryState"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumHistorySource                                       TagmanagerAccountsUserPermissionsDeleteTypeEnum = "historySource"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumContainerVersion                                    TagmanagerAccountsUserPermissionsDeleteTypeEnum = "containerVersion"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumDebugMode                                           TagmanagerAccountsUserPermissionsDeleteTypeEnum = "debugMode"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumRandomNumber                                        TagmanagerAccountsUserPermissionsDeleteTypeEnum = "randomNumber"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumContainerID                                         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "containerId"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAppID                                               TagmanagerAccountsUserPermissionsDeleteTypeEnum = "appId"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAppName                                             TagmanagerAccountsUserPermissionsDeleteTypeEnum = "appName"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAppVersionCode                                      TagmanagerAccountsUserPermissionsDeleteTypeEnum = "appVersionCode"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAppVersionName                                      TagmanagerAccountsUserPermissionsDeleteTypeEnum = "appVersionName"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumLanguage                                            TagmanagerAccountsUserPermissionsDeleteTypeEnum = "language"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumOsVersion                                           TagmanagerAccountsUserPermissionsDeleteTypeEnum = "osVersion"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumPlatform                                            TagmanagerAccountsUserPermissionsDeleteTypeEnum = "platform"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumSdkVersion                                          TagmanagerAccountsUserPermissionsDeleteTypeEnum = "sdkVersion"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumDeviceName                                          TagmanagerAccountsUserPermissionsDeleteTypeEnum = "deviceName"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumResolution                                          TagmanagerAccountsUserPermissionsDeleteTypeEnum = "resolution"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAdvertiserID                                        TagmanagerAccountsUserPermissionsDeleteTypeEnum = "advertiserId"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAdvertisingTrackingEnabled                          TagmanagerAccountsUserPermissionsDeleteTypeEnum = "advertisingTrackingEnabled"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumHtmlid                                              TagmanagerAccountsUserPermissionsDeleteTypeEnum = "htmlId"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumEnvironmentName                                     TagmanagerAccountsUserPermissionsDeleteTypeEnum = "environmentName"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpBrowserLanguage                                  TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampBrowserLanguage"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpCanonicalPath                                    TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampCanonicalPath"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpCanonicalURL                                     TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampCanonicalUrl"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpCanonicalHost                                    TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampCanonicalHost"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpReferrer                                         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampReferrer"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpTitle                                            TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampTitle"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpClientID                                         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampClientId"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpClientTimezone                                   TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampClientTimezone"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpClientTimestamp                                  TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampClientTimestamp"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpClientScreenWidth                                TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampClientScreenWidth"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpClientScreenHeight                               TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampClientScreenHeight"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpClientScrollX                                    TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampClientScrollX"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpClientScrollY                                    TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampClientScrollY"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpClientMaxScrollX                                 TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampClientMaxScrollX"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpClientMaxScrollY                                 TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampClientMaxScrollY"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpTotalEngagedTime                                 TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampTotalEngagedTime"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpPageViewID                                       TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampPageViewId"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpPageLoadTime                                     TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampPageLoadTime"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpPageDownloadTime                                 TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampPageDownloadTime"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumAmpGtmEvent                                         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "ampGtmEvent"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumEventName                                           TagmanagerAccountsUserPermissionsDeleteTypeEnum = "eventName"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterCampaign                      TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterCampaign"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterCampaignAclid                 TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterCampaignAclid"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterCampaignAnid                  TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterCampaignAnid"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterCampaignClickTimestamp        TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterCampaignClickTimestamp"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterCampaignContent               TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterCampaignContent"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterCampaignCp1                   TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterCampaignCp1"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterCampaignGclid                 TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterCampaignGclid"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterCampaignSource                TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterCampaignSource"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterCampaignTerm                  TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterCampaignTerm"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterCurrency                      TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterCurrency"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterDynamicLinkAcceptTime         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterDynamicLinkAcceptTime"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterDynamicLinkLinkid             TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterDynamicLinkLinkid"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterNotificationMessageDeviceTime TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterNotificationMessageDeviceTime"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterNotificationMessageID         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterNotificationMessageId"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterNotificationMessageName       TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterNotificationMessageName"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterNotificationMessageTime       TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterNotificationMessageTime"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterNotificationTopic             TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterNotificationTopic"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterPreviousAppVersion            TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterPreviousAppVersion"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterPreviousOsVersion             TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterPreviousOsVersion"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterPrice                         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterPrice"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterProductID                     TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterProductId"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterQuantity                      TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterQuantity"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumFirebaseEventParameterValue                         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "firebaseEventParameterValue"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumVideoProvider                                       TagmanagerAccountsUserPermissionsDeleteTypeEnum = "videoProvider"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumVideoURL                                            TagmanagerAccountsUserPermissionsDeleteTypeEnum = "videoUrl"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumVideoTitle                                          TagmanagerAccountsUserPermissionsDeleteTypeEnum = "videoTitle"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumVideoDuration                                       TagmanagerAccountsUserPermissionsDeleteTypeEnum = "videoDuration"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumVideoPercent                                        TagmanagerAccountsUserPermissionsDeleteTypeEnum = "videoPercent"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumVideoVisible                                        TagmanagerAccountsUserPermissionsDeleteTypeEnum = "videoVisible"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumVideoStatus                                         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "videoStatus"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumVideoCurrentTime                                    TagmanagerAccountsUserPermissionsDeleteTypeEnum = "videoCurrentTime"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumScrollDepthThreshold                                TagmanagerAccountsUserPermissionsDeleteTypeEnum = "scrollDepthThreshold"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumScrollDepthUnits                                    TagmanagerAccountsUserPermissionsDeleteTypeEnum = "scrollDepthUnits"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumScrollDepthDirection                                TagmanagerAccountsUserPermissionsDeleteTypeEnum = "scrollDepthDirection"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumElementVisibilityRatio                              TagmanagerAccountsUserPermissionsDeleteTypeEnum = "elementVisibilityRatio"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumElementVisibilityTime                               TagmanagerAccountsUserPermissionsDeleteTypeEnum = "elementVisibilityTime"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumElementVisibilityFirstTime                          TagmanagerAccountsUserPermissionsDeleteTypeEnum = "elementVisibilityFirstTime"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumElementVisibilityRecentTime                         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "elementVisibilityRecentTime"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumRequestPath                                         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "requestPath"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumRequestMethod                                       TagmanagerAccountsUserPermissionsDeleteTypeEnum = "requestMethod"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumClientName                                          TagmanagerAccountsUserPermissionsDeleteTypeEnum = "clientName"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumQueryString                                         TagmanagerAccountsUserPermissionsDeleteTypeEnum = "queryString"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumServerPageLocationURL                               TagmanagerAccountsUserPermissionsDeleteTypeEnum = "serverPageLocationUrl"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumServerPageLocationPath                              TagmanagerAccountsUserPermissionsDeleteTypeEnum = "serverPageLocationPath"
	TagmanagerAccountsUserPermissionsDeleteTypeEnumServerPageLocationHostname                          TagmanagerAccountsUserPermissionsDeleteTypeEnum = "serverPageLocationHostname"
)

type TagmanagerAccountsUserPermissionsDeleteQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                 `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                           `queryParam:"style=form,explode=true,name=quotaUser"`
	Type           []TagmanagerAccountsUserPermissionsDeleteTypeEnum `queryParam:"style=form,explode=true,name=type"`
	UploadType     *string                                           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type TagmanagerAccountsUserPermissionsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsUserPermissionsDeleteRequest struct {
	PathParams  TagmanagerAccountsUserPermissionsDeletePathParams
	QueryParams TagmanagerAccountsUserPermissionsDeleteQueryParams
	Security    TagmanagerAccountsUserPermissionsDeleteSecurity
}

type TagmanagerAccountsUserPermissionsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
