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
var TagmanagerAccountsUserPermissionsDeletePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsDeletePathParams, _super);
    function TagmanagerAccountsUserPermissionsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsDeletePathParams.prototype, "path", void 0);
    return TagmanagerAccountsUserPermissionsDeletePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsDeletePathParams };
export var TagmanagerAccountsUserPermissionsDeleteTypeEnum;
(function (TagmanagerAccountsUserPermissionsDeleteTypeEnum) {
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["BuiltInVariableTypeUnspecified"] = "builtInVariableTypeUnspecified";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["PageUrl"] = "pageUrl";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["PageHostname"] = "pageHostname";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["PagePath"] = "pagePath";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["Referrer"] = "referrer";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["Event"] = "event";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ClickElement"] = "clickElement";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ClickClasses"] = "clickClasses";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ClickId"] = "clickId";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ClickTarget"] = "clickTarget";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ClickUrl"] = "clickUrl";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ClickText"] = "clickText";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirstPartyServingUrl"] = "firstPartyServingUrl";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FormElement"] = "formElement";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FormClasses"] = "formClasses";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FormId"] = "formId";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FormTarget"] = "formTarget";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FormUrl"] = "formUrl";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FormText"] = "formText";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ErrorMessage"] = "errorMessage";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ErrorUrl"] = "errorUrl";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ErrorLine"] = "errorLine";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["NewHistoryUrl"] = "newHistoryUrl";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["OldHistoryUrl"] = "oldHistoryUrl";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["NewHistoryFragment"] = "newHistoryFragment";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["OldHistoryFragment"] = "oldHistoryFragment";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["NewHistoryState"] = "newHistoryState";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["OldHistoryState"] = "oldHistoryState";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["HistorySource"] = "historySource";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ContainerVersion"] = "containerVersion";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["DebugMode"] = "debugMode";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["RandomNumber"] = "randomNumber";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ContainerId"] = "containerId";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AppId"] = "appId";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AppName"] = "appName";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AppVersionCode"] = "appVersionCode";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AppVersionName"] = "appVersionName";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["Language"] = "language";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["OsVersion"] = "osVersion";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["Platform"] = "platform";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["SdkVersion"] = "sdkVersion";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["DeviceName"] = "deviceName";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["Resolution"] = "resolution";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AdvertiserId"] = "advertiserId";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AdvertisingTrackingEnabled"] = "advertisingTrackingEnabled";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["HtmlId"] = "htmlId";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["EnvironmentName"] = "environmentName";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpBrowserLanguage"] = "ampBrowserLanguage";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpCanonicalPath"] = "ampCanonicalPath";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpCanonicalUrl"] = "ampCanonicalUrl";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpCanonicalHost"] = "ampCanonicalHost";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpReferrer"] = "ampReferrer";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpTitle"] = "ampTitle";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpClientId"] = "ampClientId";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpClientTimezone"] = "ampClientTimezone";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpClientTimestamp"] = "ampClientTimestamp";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpClientScreenWidth"] = "ampClientScreenWidth";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpClientScreenHeight"] = "ampClientScreenHeight";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpClientScrollX"] = "ampClientScrollX";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpClientScrollY"] = "ampClientScrollY";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpClientMaxScrollX"] = "ampClientMaxScrollX";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpClientMaxScrollY"] = "ampClientMaxScrollY";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpTotalEngagedTime"] = "ampTotalEngagedTime";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpPageViewId"] = "ampPageViewId";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpPageLoadTime"] = "ampPageLoadTime";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpPageDownloadTime"] = "ampPageDownloadTime";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["AmpGtmEvent"] = "ampGtmEvent";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["EventName"] = "eventName";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterCampaign"] = "firebaseEventParameterCampaign";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterCampaignAclid"] = "firebaseEventParameterCampaignAclid";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterCampaignAnid"] = "firebaseEventParameterCampaignAnid";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterCampaignClickTimestamp"] = "firebaseEventParameterCampaignClickTimestamp";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterCampaignContent"] = "firebaseEventParameterCampaignContent";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterCampaignCp1"] = "firebaseEventParameterCampaignCp1";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterCampaignGclid"] = "firebaseEventParameterCampaignGclid";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterCampaignSource"] = "firebaseEventParameterCampaignSource";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterCampaignTerm"] = "firebaseEventParameterCampaignTerm";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterCurrency"] = "firebaseEventParameterCurrency";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterDynamicLinkAcceptTime"] = "firebaseEventParameterDynamicLinkAcceptTime";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterDynamicLinkLinkid"] = "firebaseEventParameterDynamicLinkLinkid";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterNotificationMessageDeviceTime"] = "firebaseEventParameterNotificationMessageDeviceTime";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterNotificationMessageId"] = "firebaseEventParameterNotificationMessageId";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterNotificationMessageName"] = "firebaseEventParameterNotificationMessageName";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterNotificationMessageTime"] = "firebaseEventParameterNotificationMessageTime";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterNotificationTopic"] = "firebaseEventParameterNotificationTopic";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterPreviousAppVersion"] = "firebaseEventParameterPreviousAppVersion";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterPreviousOsVersion"] = "firebaseEventParameterPreviousOsVersion";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterPrice"] = "firebaseEventParameterPrice";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterProductId"] = "firebaseEventParameterProductId";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterQuantity"] = "firebaseEventParameterQuantity";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["FirebaseEventParameterValue"] = "firebaseEventParameterValue";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["VideoProvider"] = "videoProvider";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["VideoUrl"] = "videoUrl";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["VideoTitle"] = "videoTitle";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["VideoDuration"] = "videoDuration";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["VideoPercent"] = "videoPercent";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["VideoVisible"] = "videoVisible";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["VideoStatus"] = "videoStatus";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["VideoCurrentTime"] = "videoCurrentTime";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ScrollDepthThreshold"] = "scrollDepthThreshold";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ScrollDepthUnits"] = "scrollDepthUnits";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ScrollDepthDirection"] = "scrollDepthDirection";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ElementVisibilityRatio"] = "elementVisibilityRatio";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ElementVisibilityTime"] = "elementVisibilityTime";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ElementVisibilityFirstTime"] = "elementVisibilityFirstTime";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ElementVisibilityRecentTime"] = "elementVisibilityRecentTime";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["RequestPath"] = "requestPath";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["RequestMethod"] = "requestMethod";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ClientName"] = "clientName";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["QueryString"] = "queryString";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ServerPageLocationUrl"] = "serverPageLocationUrl";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ServerPageLocationPath"] = "serverPageLocationPath";
    TagmanagerAccountsUserPermissionsDeleteTypeEnum["ServerPageLocationHostname"] = "serverPageLocationHostname";
})(TagmanagerAccountsUserPermissionsDeleteTypeEnum || (TagmanagerAccountsUserPermissionsDeleteTypeEnum = {}));
var TagmanagerAccountsUserPermissionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsDeleteQueryParams, _super);
    function TagmanagerAccountsUserPermissionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsUserPermissionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", Array)
    ], TagmanagerAccountsUserPermissionsDeleteQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsUserPermissionsDeleteQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsDeleteQueryParams };
var TagmanagerAccountsUserPermissionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsDeleteSecurity, _super);
    function TagmanagerAccountsUserPermissionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsUserPermissionsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsUserPermissionsDeleteSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsUserPermissionsDeleteSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsDeleteSecurity };
var TagmanagerAccountsUserPermissionsDeleteRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsDeleteRequest, _super);
    function TagmanagerAccountsUserPermissionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsUserPermissionsDeletePathParams)
    ], TagmanagerAccountsUserPermissionsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsUserPermissionsDeleteQueryParams)
    ], TagmanagerAccountsUserPermissionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsUserPermissionsDeleteSecurity)
    ], TagmanagerAccountsUserPermissionsDeleteRequest.prototype, "security", void 0);
    return TagmanagerAccountsUserPermissionsDeleteRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsDeleteRequest };
var TagmanagerAccountsUserPermissionsDeleteResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsDeleteResponse, _super);
    function TagmanagerAccountsUserPermissionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsUserPermissionsDeleteResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsUserPermissionsDeleteResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsDeleteResponse };
