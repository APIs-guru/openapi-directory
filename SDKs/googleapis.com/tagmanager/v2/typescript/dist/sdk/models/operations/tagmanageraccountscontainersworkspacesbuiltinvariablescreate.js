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
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreatePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreatePathParams, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreatePathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreatePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreatePathParams };
export var TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum;
(function (TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum) {
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["BuiltInVariableTypeUnspecified"] = "builtInVariableTypeUnspecified";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["PageUrl"] = "pageUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["PageHostname"] = "pageHostname";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["PagePath"] = "pagePath";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["Referrer"] = "referrer";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["Event"] = "event";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ClickElement"] = "clickElement";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ClickClasses"] = "clickClasses";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ClickId"] = "clickId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ClickTarget"] = "clickTarget";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ClickUrl"] = "clickUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ClickText"] = "clickText";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirstPartyServingUrl"] = "firstPartyServingUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FormElement"] = "formElement";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FormClasses"] = "formClasses";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FormId"] = "formId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FormTarget"] = "formTarget";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FormUrl"] = "formUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FormText"] = "formText";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ErrorMessage"] = "errorMessage";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ErrorUrl"] = "errorUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ErrorLine"] = "errorLine";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["NewHistoryUrl"] = "newHistoryUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["OldHistoryUrl"] = "oldHistoryUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["NewHistoryFragment"] = "newHistoryFragment";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["OldHistoryFragment"] = "oldHistoryFragment";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["NewHistoryState"] = "newHistoryState";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["OldHistoryState"] = "oldHistoryState";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["HistorySource"] = "historySource";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ContainerVersion"] = "containerVersion";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["DebugMode"] = "debugMode";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["RandomNumber"] = "randomNumber";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ContainerId"] = "containerId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AppId"] = "appId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AppName"] = "appName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AppVersionCode"] = "appVersionCode";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AppVersionName"] = "appVersionName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["Language"] = "language";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["OsVersion"] = "osVersion";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["Platform"] = "platform";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["SdkVersion"] = "sdkVersion";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["DeviceName"] = "deviceName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["Resolution"] = "resolution";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AdvertiserId"] = "advertiserId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AdvertisingTrackingEnabled"] = "advertisingTrackingEnabled";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["HtmlId"] = "htmlId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["EnvironmentName"] = "environmentName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpBrowserLanguage"] = "ampBrowserLanguage";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpCanonicalPath"] = "ampCanonicalPath";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpCanonicalUrl"] = "ampCanonicalUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpCanonicalHost"] = "ampCanonicalHost";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpReferrer"] = "ampReferrer";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpTitle"] = "ampTitle";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpClientId"] = "ampClientId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpClientTimezone"] = "ampClientTimezone";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpClientTimestamp"] = "ampClientTimestamp";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpClientScreenWidth"] = "ampClientScreenWidth";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpClientScreenHeight"] = "ampClientScreenHeight";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpClientScrollX"] = "ampClientScrollX";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpClientScrollY"] = "ampClientScrollY";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpClientMaxScrollX"] = "ampClientMaxScrollX";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpClientMaxScrollY"] = "ampClientMaxScrollY";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpTotalEngagedTime"] = "ampTotalEngagedTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpPageViewId"] = "ampPageViewId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpPageLoadTime"] = "ampPageLoadTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpPageDownloadTime"] = "ampPageDownloadTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["AmpGtmEvent"] = "ampGtmEvent";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["EventName"] = "eventName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterCampaign"] = "firebaseEventParameterCampaign";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterCampaignAclid"] = "firebaseEventParameterCampaignAclid";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterCampaignAnid"] = "firebaseEventParameterCampaignAnid";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterCampaignClickTimestamp"] = "firebaseEventParameterCampaignClickTimestamp";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterCampaignContent"] = "firebaseEventParameterCampaignContent";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterCampaignCp1"] = "firebaseEventParameterCampaignCp1";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterCampaignGclid"] = "firebaseEventParameterCampaignGclid";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterCampaignSource"] = "firebaseEventParameterCampaignSource";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterCampaignTerm"] = "firebaseEventParameterCampaignTerm";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterCurrency"] = "firebaseEventParameterCurrency";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterDynamicLinkAcceptTime"] = "firebaseEventParameterDynamicLinkAcceptTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterDynamicLinkLinkid"] = "firebaseEventParameterDynamicLinkLinkid";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterNotificationMessageDeviceTime"] = "firebaseEventParameterNotificationMessageDeviceTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterNotificationMessageId"] = "firebaseEventParameterNotificationMessageId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterNotificationMessageName"] = "firebaseEventParameterNotificationMessageName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterNotificationMessageTime"] = "firebaseEventParameterNotificationMessageTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterNotificationTopic"] = "firebaseEventParameterNotificationTopic";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterPreviousAppVersion"] = "firebaseEventParameterPreviousAppVersion";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterPreviousOsVersion"] = "firebaseEventParameterPreviousOsVersion";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterPrice"] = "firebaseEventParameterPrice";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterProductId"] = "firebaseEventParameterProductId";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterQuantity"] = "firebaseEventParameterQuantity";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["FirebaseEventParameterValue"] = "firebaseEventParameterValue";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["VideoProvider"] = "videoProvider";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["VideoUrl"] = "videoUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["VideoTitle"] = "videoTitle";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["VideoDuration"] = "videoDuration";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["VideoPercent"] = "videoPercent";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["VideoVisible"] = "videoVisible";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["VideoStatus"] = "videoStatus";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["VideoCurrentTime"] = "videoCurrentTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ScrollDepthThreshold"] = "scrollDepthThreshold";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ScrollDepthUnits"] = "scrollDepthUnits";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ScrollDepthDirection"] = "scrollDepthDirection";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ElementVisibilityRatio"] = "elementVisibilityRatio";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ElementVisibilityTime"] = "elementVisibilityTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ElementVisibilityFirstTime"] = "elementVisibilityFirstTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ElementVisibilityRecentTime"] = "elementVisibilityRecentTime";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["RequestPath"] = "requestPath";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["RequestMethod"] = "requestMethod";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ClientName"] = "clientName";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["QueryString"] = "queryString";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ServerPageLocationUrl"] = "serverPageLocationUrl";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ServerPageLocationPath"] = "serverPageLocationPath";
    TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum["ServerPageLocationHostname"] = "serverPageLocationHostname";
})(TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum || (TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum = {}));
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", Array)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams };
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity };
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreatePathParams)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateQueryParams)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest };
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateBuiltInVariableResponse)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse.prototype, "createBuiltInVariableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse };
