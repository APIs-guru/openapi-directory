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
export var BuiltInVariableTypeEnum;
(function (BuiltInVariableTypeEnum) {
    BuiltInVariableTypeEnum["BuiltInVariableTypeUnspecified"] = "builtInVariableTypeUnspecified";
    BuiltInVariableTypeEnum["PageUrl"] = "pageUrl";
    BuiltInVariableTypeEnum["PageHostname"] = "pageHostname";
    BuiltInVariableTypeEnum["PagePath"] = "pagePath";
    BuiltInVariableTypeEnum["Referrer"] = "referrer";
    BuiltInVariableTypeEnum["Event"] = "event";
    BuiltInVariableTypeEnum["ClickElement"] = "clickElement";
    BuiltInVariableTypeEnum["ClickClasses"] = "clickClasses";
    BuiltInVariableTypeEnum["ClickId"] = "clickId";
    BuiltInVariableTypeEnum["ClickTarget"] = "clickTarget";
    BuiltInVariableTypeEnum["ClickUrl"] = "clickUrl";
    BuiltInVariableTypeEnum["ClickText"] = "clickText";
    BuiltInVariableTypeEnum["FirstPartyServingUrl"] = "firstPartyServingUrl";
    BuiltInVariableTypeEnum["FormElement"] = "formElement";
    BuiltInVariableTypeEnum["FormClasses"] = "formClasses";
    BuiltInVariableTypeEnum["FormId"] = "formId";
    BuiltInVariableTypeEnum["FormTarget"] = "formTarget";
    BuiltInVariableTypeEnum["FormUrl"] = "formUrl";
    BuiltInVariableTypeEnum["FormText"] = "formText";
    BuiltInVariableTypeEnum["ErrorMessage"] = "errorMessage";
    BuiltInVariableTypeEnum["ErrorUrl"] = "errorUrl";
    BuiltInVariableTypeEnum["ErrorLine"] = "errorLine";
    BuiltInVariableTypeEnum["NewHistoryUrl"] = "newHistoryUrl";
    BuiltInVariableTypeEnum["OldHistoryUrl"] = "oldHistoryUrl";
    BuiltInVariableTypeEnum["NewHistoryFragment"] = "newHistoryFragment";
    BuiltInVariableTypeEnum["OldHistoryFragment"] = "oldHistoryFragment";
    BuiltInVariableTypeEnum["NewHistoryState"] = "newHistoryState";
    BuiltInVariableTypeEnum["OldHistoryState"] = "oldHistoryState";
    BuiltInVariableTypeEnum["HistorySource"] = "historySource";
    BuiltInVariableTypeEnum["ContainerVersion"] = "containerVersion";
    BuiltInVariableTypeEnum["DebugMode"] = "debugMode";
    BuiltInVariableTypeEnum["RandomNumber"] = "randomNumber";
    BuiltInVariableTypeEnum["ContainerId"] = "containerId";
    BuiltInVariableTypeEnum["AppId"] = "appId";
    BuiltInVariableTypeEnum["AppName"] = "appName";
    BuiltInVariableTypeEnum["AppVersionCode"] = "appVersionCode";
    BuiltInVariableTypeEnum["AppVersionName"] = "appVersionName";
    BuiltInVariableTypeEnum["Language"] = "language";
    BuiltInVariableTypeEnum["OsVersion"] = "osVersion";
    BuiltInVariableTypeEnum["Platform"] = "platform";
    BuiltInVariableTypeEnum["SdkVersion"] = "sdkVersion";
    BuiltInVariableTypeEnum["DeviceName"] = "deviceName";
    BuiltInVariableTypeEnum["Resolution"] = "resolution";
    BuiltInVariableTypeEnum["AdvertiserId"] = "advertiserId";
    BuiltInVariableTypeEnum["AdvertisingTrackingEnabled"] = "advertisingTrackingEnabled";
    BuiltInVariableTypeEnum["HtmlId"] = "htmlId";
    BuiltInVariableTypeEnum["EnvironmentName"] = "environmentName";
    BuiltInVariableTypeEnum["AmpBrowserLanguage"] = "ampBrowserLanguage";
    BuiltInVariableTypeEnum["AmpCanonicalPath"] = "ampCanonicalPath";
    BuiltInVariableTypeEnum["AmpCanonicalUrl"] = "ampCanonicalUrl";
    BuiltInVariableTypeEnum["AmpCanonicalHost"] = "ampCanonicalHost";
    BuiltInVariableTypeEnum["AmpReferrer"] = "ampReferrer";
    BuiltInVariableTypeEnum["AmpTitle"] = "ampTitle";
    BuiltInVariableTypeEnum["AmpClientId"] = "ampClientId";
    BuiltInVariableTypeEnum["AmpClientTimezone"] = "ampClientTimezone";
    BuiltInVariableTypeEnum["AmpClientTimestamp"] = "ampClientTimestamp";
    BuiltInVariableTypeEnum["AmpClientScreenWidth"] = "ampClientScreenWidth";
    BuiltInVariableTypeEnum["AmpClientScreenHeight"] = "ampClientScreenHeight";
    BuiltInVariableTypeEnum["AmpClientScrollX"] = "ampClientScrollX";
    BuiltInVariableTypeEnum["AmpClientScrollY"] = "ampClientScrollY";
    BuiltInVariableTypeEnum["AmpClientMaxScrollX"] = "ampClientMaxScrollX";
    BuiltInVariableTypeEnum["AmpClientMaxScrollY"] = "ampClientMaxScrollY";
    BuiltInVariableTypeEnum["AmpTotalEngagedTime"] = "ampTotalEngagedTime";
    BuiltInVariableTypeEnum["AmpPageViewId"] = "ampPageViewId";
    BuiltInVariableTypeEnum["AmpPageLoadTime"] = "ampPageLoadTime";
    BuiltInVariableTypeEnum["AmpPageDownloadTime"] = "ampPageDownloadTime";
    BuiltInVariableTypeEnum["AmpGtmEvent"] = "ampGtmEvent";
    BuiltInVariableTypeEnum["EventName"] = "eventName";
    BuiltInVariableTypeEnum["FirebaseEventParameterCampaign"] = "firebaseEventParameterCampaign";
    BuiltInVariableTypeEnum["FirebaseEventParameterCampaignAclid"] = "firebaseEventParameterCampaignAclid";
    BuiltInVariableTypeEnum["FirebaseEventParameterCampaignAnid"] = "firebaseEventParameterCampaignAnid";
    BuiltInVariableTypeEnum["FirebaseEventParameterCampaignClickTimestamp"] = "firebaseEventParameterCampaignClickTimestamp";
    BuiltInVariableTypeEnum["FirebaseEventParameterCampaignContent"] = "firebaseEventParameterCampaignContent";
    BuiltInVariableTypeEnum["FirebaseEventParameterCampaignCp1"] = "firebaseEventParameterCampaignCp1";
    BuiltInVariableTypeEnum["FirebaseEventParameterCampaignGclid"] = "firebaseEventParameterCampaignGclid";
    BuiltInVariableTypeEnum["FirebaseEventParameterCampaignSource"] = "firebaseEventParameterCampaignSource";
    BuiltInVariableTypeEnum["FirebaseEventParameterCampaignTerm"] = "firebaseEventParameterCampaignTerm";
    BuiltInVariableTypeEnum["FirebaseEventParameterCurrency"] = "firebaseEventParameterCurrency";
    BuiltInVariableTypeEnum["FirebaseEventParameterDynamicLinkAcceptTime"] = "firebaseEventParameterDynamicLinkAcceptTime";
    BuiltInVariableTypeEnum["FirebaseEventParameterDynamicLinkLinkid"] = "firebaseEventParameterDynamicLinkLinkid";
    BuiltInVariableTypeEnum["FirebaseEventParameterNotificationMessageDeviceTime"] = "firebaseEventParameterNotificationMessageDeviceTime";
    BuiltInVariableTypeEnum["FirebaseEventParameterNotificationMessageId"] = "firebaseEventParameterNotificationMessageId";
    BuiltInVariableTypeEnum["FirebaseEventParameterNotificationMessageName"] = "firebaseEventParameterNotificationMessageName";
    BuiltInVariableTypeEnum["FirebaseEventParameterNotificationMessageTime"] = "firebaseEventParameterNotificationMessageTime";
    BuiltInVariableTypeEnum["FirebaseEventParameterNotificationTopic"] = "firebaseEventParameterNotificationTopic";
    BuiltInVariableTypeEnum["FirebaseEventParameterPreviousAppVersion"] = "firebaseEventParameterPreviousAppVersion";
    BuiltInVariableTypeEnum["FirebaseEventParameterPreviousOsVersion"] = "firebaseEventParameterPreviousOsVersion";
    BuiltInVariableTypeEnum["FirebaseEventParameterPrice"] = "firebaseEventParameterPrice";
    BuiltInVariableTypeEnum["FirebaseEventParameterProductId"] = "firebaseEventParameterProductId";
    BuiltInVariableTypeEnum["FirebaseEventParameterQuantity"] = "firebaseEventParameterQuantity";
    BuiltInVariableTypeEnum["FirebaseEventParameterValue"] = "firebaseEventParameterValue";
    BuiltInVariableTypeEnum["VideoProvider"] = "videoProvider";
    BuiltInVariableTypeEnum["VideoUrl"] = "videoUrl";
    BuiltInVariableTypeEnum["VideoTitle"] = "videoTitle";
    BuiltInVariableTypeEnum["VideoDuration"] = "videoDuration";
    BuiltInVariableTypeEnum["VideoPercent"] = "videoPercent";
    BuiltInVariableTypeEnum["VideoVisible"] = "videoVisible";
    BuiltInVariableTypeEnum["VideoStatus"] = "videoStatus";
    BuiltInVariableTypeEnum["VideoCurrentTime"] = "videoCurrentTime";
    BuiltInVariableTypeEnum["ScrollDepthThreshold"] = "scrollDepthThreshold";
    BuiltInVariableTypeEnum["ScrollDepthUnits"] = "scrollDepthUnits";
    BuiltInVariableTypeEnum["ScrollDepthDirection"] = "scrollDepthDirection";
    BuiltInVariableTypeEnum["ElementVisibilityRatio"] = "elementVisibilityRatio";
    BuiltInVariableTypeEnum["ElementVisibilityTime"] = "elementVisibilityTime";
    BuiltInVariableTypeEnum["ElementVisibilityFirstTime"] = "elementVisibilityFirstTime";
    BuiltInVariableTypeEnum["ElementVisibilityRecentTime"] = "elementVisibilityRecentTime";
    BuiltInVariableTypeEnum["RequestPath"] = "requestPath";
    BuiltInVariableTypeEnum["RequestMethod"] = "requestMethod";
    BuiltInVariableTypeEnum["ClientName"] = "clientName";
    BuiltInVariableTypeEnum["QueryString"] = "queryString";
    BuiltInVariableTypeEnum["ServerPageLocationUrl"] = "serverPageLocationUrl";
    BuiltInVariableTypeEnum["ServerPageLocationPath"] = "serverPageLocationPath";
    BuiltInVariableTypeEnum["ServerPageLocationHostname"] = "serverPageLocationHostname";
})(BuiltInVariableTypeEnum || (BuiltInVariableTypeEnum = {}));
// BuiltInVariable
/**
 * Built-in variables are a special category of variables that are pre-created and non-customizable. They provide common functionality like accessing properties of the gtm data layer, monitoring clicks, or accessing elements of a page URL.
**/
var BuiltInVariable = /** @class */ (function (_super) {
    __extends(BuiltInVariable, _super);
    function BuiltInVariable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], BuiltInVariable.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerId" }),
        __metadata("design:type", String)
    ], BuiltInVariable.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BuiltInVariable.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], BuiltInVariable.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BuiltInVariable.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspaceId" }),
        __metadata("design:type", String)
    ], BuiltInVariable.prototype, "workspaceId", void 0);
    return BuiltInVariable;
}(SpeakeasyBase));
export { BuiltInVariable };
