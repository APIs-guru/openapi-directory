var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertPathParams, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertPathParams.prototype, "path", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertPathParams };
export var TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum;
(function (TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum) {
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["BuiltInVariableTypeUnspecified"] = "builtInVariableTypeUnspecified";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["PageUrl"] = "pageUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["PageHostname"] = "pageHostname";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["PagePath"] = "pagePath";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["Referrer"] = "referrer";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["Event"] = "event";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ClickElement"] = "clickElement";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ClickClasses"] = "clickClasses";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ClickId"] = "clickId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ClickTarget"] = "clickTarget";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ClickUrl"] = "clickUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ClickText"] = "clickText";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirstPartyServingUrl"] = "firstPartyServingUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FormElement"] = "formElement";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FormClasses"] = "formClasses";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FormId"] = "formId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FormTarget"] = "formTarget";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FormUrl"] = "formUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FormText"] = "formText";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ErrorMessage"] = "errorMessage";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ErrorUrl"] = "errorUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ErrorLine"] = "errorLine";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["NewHistoryUrl"] = "newHistoryUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["OldHistoryUrl"] = "oldHistoryUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["NewHistoryFragment"] = "newHistoryFragment";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["OldHistoryFragment"] = "oldHistoryFragment";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["NewHistoryState"] = "newHistoryState";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["OldHistoryState"] = "oldHistoryState";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["HistorySource"] = "historySource";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ContainerVersion"] = "containerVersion";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["DebugMode"] = "debugMode";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["RandomNumber"] = "randomNumber";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ContainerId"] = "containerId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AppId"] = "appId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AppName"] = "appName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AppVersionCode"] = "appVersionCode";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AppVersionName"] = "appVersionName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["Language"] = "language";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["OsVersion"] = "osVersion";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["Platform"] = "platform";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["SdkVersion"] = "sdkVersion";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["DeviceName"] = "deviceName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["Resolution"] = "resolution";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AdvertiserId"] = "advertiserId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AdvertisingTrackingEnabled"] = "advertisingTrackingEnabled";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["HtmlId"] = "htmlId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["EnvironmentName"] = "environmentName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpBrowserLanguage"] = "ampBrowserLanguage";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpCanonicalPath"] = "ampCanonicalPath";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpCanonicalUrl"] = "ampCanonicalUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpCanonicalHost"] = "ampCanonicalHost";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpReferrer"] = "ampReferrer";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpTitle"] = "ampTitle";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpClientId"] = "ampClientId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpClientTimezone"] = "ampClientTimezone";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpClientTimestamp"] = "ampClientTimestamp";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpClientScreenWidth"] = "ampClientScreenWidth";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpClientScreenHeight"] = "ampClientScreenHeight";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpClientScrollX"] = "ampClientScrollX";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpClientScrollY"] = "ampClientScrollY";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpClientMaxScrollX"] = "ampClientMaxScrollX";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpClientMaxScrollY"] = "ampClientMaxScrollY";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpTotalEngagedTime"] = "ampTotalEngagedTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpPageViewId"] = "ampPageViewId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpPageLoadTime"] = "ampPageLoadTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpPageDownloadTime"] = "ampPageDownloadTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["AmpGtmEvent"] = "ampGtmEvent";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["EventName"] = "eventName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterCampaign"] = "firebaseEventParameterCampaign";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterCampaignAclid"] = "firebaseEventParameterCampaignAclid";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterCampaignAnid"] = "firebaseEventParameterCampaignAnid";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterCampaignClickTimestamp"] = "firebaseEventParameterCampaignClickTimestamp";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterCampaignContent"] = "firebaseEventParameterCampaignContent";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterCampaignCp1"] = "firebaseEventParameterCampaignCp1";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterCampaignGclid"] = "firebaseEventParameterCampaignGclid";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterCampaignSource"] = "firebaseEventParameterCampaignSource";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterCampaignTerm"] = "firebaseEventParameterCampaignTerm";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterCurrency"] = "firebaseEventParameterCurrency";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterDynamicLinkAcceptTime"] = "firebaseEventParameterDynamicLinkAcceptTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterDynamicLinkLinkid"] = "firebaseEventParameterDynamicLinkLinkid";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterNotificationMessageDeviceTime"] = "firebaseEventParameterNotificationMessageDeviceTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterNotificationMessageId"] = "firebaseEventParameterNotificationMessageId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterNotificationMessageName"] = "firebaseEventParameterNotificationMessageName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterNotificationMessageTime"] = "firebaseEventParameterNotificationMessageTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterNotificationTopic"] = "firebaseEventParameterNotificationTopic";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterPreviousAppVersion"] = "firebaseEventParameterPreviousAppVersion";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterPreviousOsVersion"] = "firebaseEventParameterPreviousOsVersion";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterPrice"] = "firebaseEventParameterPrice";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterProductId"] = "firebaseEventParameterProductId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterQuantity"] = "firebaseEventParameterQuantity";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["FirebaseEventParameterValue"] = "firebaseEventParameterValue";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["VideoProvider"] = "videoProvider";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["VideoUrl"] = "videoUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["VideoTitle"] = "videoTitle";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["VideoDuration"] = "videoDuration";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["VideoPercent"] = "videoPercent";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["VideoVisible"] = "videoVisible";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["VideoStatus"] = "videoStatus";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["VideoCurrentTime"] = "videoCurrentTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ScrollDepthThreshold"] = "scrollDepthThreshold";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ScrollDepthUnits"] = "scrollDepthUnits";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ScrollDepthDirection"] = "scrollDepthDirection";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ElementVisibilityRatio"] = "elementVisibilityRatio";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ElementVisibilityTime"] = "elementVisibilityTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ElementVisibilityFirstTime"] = "elementVisibilityFirstTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ElementVisibilityRecentTime"] = "elementVisibilityRecentTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["RequestPath"] = "requestPath";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["RequestMethod"] = "requestMethod";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ClientName"] = "clientName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["QueryString"] = "queryString";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ServerPageLocationUrl"] = "serverPageLocationUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ServerPageLocationPath"] = "serverPageLocationPath";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum["ServerPageLocationHostname"] = "serverPageLocationHostname";
})(TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum || (TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnum = {}));
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams };
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity };
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertPathParams)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertQueryParams)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest };
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RevertBuiltInVariableResponse)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse.prototype, "revertBuiltInVariableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse };
