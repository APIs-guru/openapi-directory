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
export var ContainerEnabledBuiltInVariableEnum;
(function (ContainerEnabledBuiltInVariableEnum) {
    ContainerEnabledBuiltInVariableEnum["PageUrl"] = "pageUrl";
    ContainerEnabledBuiltInVariableEnum["PageHostname"] = "pageHostname";
    ContainerEnabledBuiltInVariableEnum["PagePath"] = "pagePath";
    ContainerEnabledBuiltInVariableEnum["Referrer"] = "referrer";
    ContainerEnabledBuiltInVariableEnum["Event"] = "event";
    ContainerEnabledBuiltInVariableEnum["ClickElement"] = "clickElement";
    ContainerEnabledBuiltInVariableEnum["ClickClasses"] = "clickClasses";
    ContainerEnabledBuiltInVariableEnum["ClickId"] = "clickId";
    ContainerEnabledBuiltInVariableEnum["ClickTarget"] = "clickTarget";
    ContainerEnabledBuiltInVariableEnum["ClickUrl"] = "clickUrl";
    ContainerEnabledBuiltInVariableEnum["ClickText"] = "clickText";
    ContainerEnabledBuiltInVariableEnum["FirstPartyServingUrl"] = "firstPartyServingUrl";
    ContainerEnabledBuiltInVariableEnum["FormElement"] = "formElement";
    ContainerEnabledBuiltInVariableEnum["FormClasses"] = "formClasses";
    ContainerEnabledBuiltInVariableEnum["FormId"] = "formId";
    ContainerEnabledBuiltInVariableEnum["FormTarget"] = "formTarget";
    ContainerEnabledBuiltInVariableEnum["FormUrl"] = "formUrl";
    ContainerEnabledBuiltInVariableEnum["FormText"] = "formText";
    ContainerEnabledBuiltInVariableEnum["EnvironmentName"] = "environmentName";
    ContainerEnabledBuiltInVariableEnum["ErrorMessage"] = "errorMessage";
    ContainerEnabledBuiltInVariableEnum["ErrorUrl"] = "errorUrl";
    ContainerEnabledBuiltInVariableEnum["ErrorLine"] = "errorLine";
    ContainerEnabledBuiltInVariableEnum["NewHistoryUrl"] = "newHistoryUrl";
    ContainerEnabledBuiltInVariableEnum["OldHistoryUrl"] = "oldHistoryUrl";
    ContainerEnabledBuiltInVariableEnum["NewHistoryFragment"] = "newHistoryFragment";
    ContainerEnabledBuiltInVariableEnum["OldHistoryFragment"] = "oldHistoryFragment";
    ContainerEnabledBuiltInVariableEnum["NewHistoryState"] = "newHistoryState";
    ContainerEnabledBuiltInVariableEnum["OldHistoryState"] = "oldHistoryState";
    ContainerEnabledBuiltInVariableEnum["HistorySource"] = "historySource";
    ContainerEnabledBuiltInVariableEnum["ContainerVersion"] = "containerVersion";
    ContainerEnabledBuiltInVariableEnum["DebugMode"] = "debugMode";
    ContainerEnabledBuiltInVariableEnum["RandomNumber"] = "randomNumber";
    ContainerEnabledBuiltInVariableEnum["ContainerId"] = "containerId";
    ContainerEnabledBuiltInVariableEnum["AppId"] = "appId";
    ContainerEnabledBuiltInVariableEnum["AppName"] = "appName";
    ContainerEnabledBuiltInVariableEnum["AppVersionCode"] = "appVersionCode";
    ContainerEnabledBuiltInVariableEnum["AppVersionName"] = "appVersionName";
    ContainerEnabledBuiltInVariableEnum["Language"] = "language";
    ContainerEnabledBuiltInVariableEnum["OsVersion"] = "osVersion";
    ContainerEnabledBuiltInVariableEnum["Platform"] = "platform";
    ContainerEnabledBuiltInVariableEnum["SdkVersion"] = "sdkVersion";
    ContainerEnabledBuiltInVariableEnum["DeviceName"] = "deviceName";
    ContainerEnabledBuiltInVariableEnum["Resolution"] = "resolution";
    ContainerEnabledBuiltInVariableEnum["AdvertiserId"] = "advertiserId";
    ContainerEnabledBuiltInVariableEnum["AdvertisingTrackingEnabled"] = "advertisingTrackingEnabled";
    ContainerEnabledBuiltInVariableEnum["HtmlId"] = "htmlId";
    ContainerEnabledBuiltInVariableEnum["AmpBrowserLanguage"] = "ampBrowserLanguage";
    ContainerEnabledBuiltInVariableEnum["AmpCanonicalPath"] = "ampCanonicalPath";
    ContainerEnabledBuiltInVariableEnum["AmpCanonicalUrl"] = "ampCanonicalUrl";
    ContainerEnabledBuiltInVariableEnum["AmpCanonicalHost"] = "ampCanonicalHost";
    ContainerEnabledBuiltInVariableEnum["AmpReferrer"] = "ampReferrer";
    ContainerEnabledBuiltInVariableEnum["AmpTitle"] = "ampTitle";
    ContainerEnabledBuiltInVariableEnum["AmpClientId"] = "ampClientId";
    ContainerEnabledBuiltInVariableEnum["AmpClientTimezone"] = "ampClientTimezone";
    ContainerEnabledBuiltInVariableEnum["AmpClientTimestamp"] = "ampClientTimestamp";
    ContainerEnabledBuiltInVariableEnum["AmpClientScreenWidth"] = "ampClientScreenWidth";
    ContainerEnabledBuiltInVariableEnum["AmpClientScreenHeight"] = "ampClientScreenHeight";
    ContainerEnabledBuiltInVariableEnum["AmpClientScrollX"] = "ampClientScrollX";
    ContainerEnabledBuiltInVariableEnum["AmpClientScrollY"] = "ampClientScrollY";
    ContainerEnabledBuiltInVariableEnum["AmpClientMaxScrollX"] = "ampClientMaxScrollX";
    ContainerEnabledBuiltInVariableEnum["AmpClientMaxScrollY"] = "ampClientMaxScrollY";
    ContainerEnabledBuiltInVariableEnum["AmpTotalEngagedTime"] = "ampTotalEngagedTime";
    ContainerEnabledBuiltInVariableEnum["AmpPageViewId"] = "ampPageViewId";
    ContainerEnabledBuiltInVariableEnum["AmpPageLoadTime"] = "ampPageLoadTime";
    ContainerEnabledBuiltInVariableEnum["AmpPageDownloadTime"] = "ampPageDownloadTime";
    ContainerEnabledBuiltInVariableEnum["AmpGtmEvent"] = "ampGtmEvent";
    ContainerEnabledBuiltInVariableEnum["EventName"] = "eventName";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterCampaign"] = "firebaseEventParameterCampaign";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterCampaignAclid"] = "firebaseEventParameterCampaignAclid";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterCampaignAnid"] = "firebaseEventParameterCampaignAnid";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterCampaignClickTimestamp"] = "firebaseEventParameterCampaignClickTimestamp";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterCampaignContent"] = "firebaseEventParameterCampaignContent";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterCampaignCp1"] = "firebaseEventParameterCampaignCp1";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterCampaignGclid"] = "firebaseEventParameterCampaignGclid";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterCampaignSource"] = "firebaseEventParameterCampaignSource";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterCampaignTerm"] = "firebaseEventParameterCampaignTerm";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterCurrency"] = "firebaseEventParameterCurrency";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterDynamicLinkAcceptTime"] = "firebaseEventParameterDynamicLinkAcceptTime";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterDynamicLinkLinkid"] = "firebaseEventParameterDynamicLinkLinkid";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterNotificationMessageDeviceTime"] = "firebaseEventParameterNotificationMessageDeviceTime";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterNotificationMessageId"] = "firebaseEventParameterNotificationMessageId";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterNotificationMessageName"] = "firebaseEventParameterNotificationMessageName";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterNotificationMessageTime"] = "firebaseEventParameterNotificationMessageTime";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterNotificationTopic"] = "firebaseEventParameterNotificationTopic";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterPreviousAppVersion"] = "firebaseEventParameterPreviousAppVersion";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterPreviousOsVersion"] = "firebaseEventParameterPreviousOsVersion";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterPrice"] = "firebaseEventParameterPrice";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterProductId"] = "firebaseEventParameterProductId";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterQuantity"] = "firebaseEventParameterQuantity";
    ContainerEnabledBuiltInVariableEnum["FirebaseEventParameterValue"] = "firebaseEventParameterValue";
    ContainerEnabledBuiltInVariableEnum["VideoProvider"] = "videoProvider";
    ContainerEnabledBuiltInVariableEnum["VideoUrl"] = "videoUrl";
    ContainerEnabledBuiltInVariableEnum["VideoTitle"] = "videoTitle";
    ContainerEnabledBuiltInVariableEnum["VideoDuration"] = "videoDuration";
    ContainerEnabledBuiltInVariableEnum["VideoPercent"] = "videoPercent";
    ContainerEnabledBuiltInVariableEnum["VideoVisible"] = "videoVisible";
    ContainerEnabledBuiltInVariableEnum["VideoStatus"] = "videoStatus";
    ContainerEnabledBuiltInVariableEnum["VideoCurrentTime"] = "videoCurrentTime";
    ContainerEnabledBuiltInVariableEnum["ScrollDepthThreshold"] = "scrollDepthThreshold";
    ContainerEnabledBuiltInVariableEnum["ScrollDepthUnits"] = "scrollDepthUnits";
    ContainerEnabledBuiltInVariableEnum["ScrollDepthDirection"] = "scrollDepthDirection";
    ContainerEnabledBuiltInVariableEnum["ElementVisibilityRatio"] = "elementVisibilityRatio";
    ContainerEnabledBuiltInVariableEnum["ElementVisibilityTime"] = "elementVisibilityTime";
    ContainerEnabledBuiltInVariableEnum["ElementVisibilityFirstTime"] = "elementVisibilityFirstTime";
    ContainerEnabledBuiltInVariableEnum["ElementVisibilityRecentTime"] = "elementVisibilityRecentTime";
})(ContainerEnabledBuiltInVariableEnum || (ContainerEnabledBuiltInVariableEnum = {}));
export var ContainerUsageContextEnum;
(function (ContainerUsageContextEnum) {
    ContainerUsageContextEnum["Web"] = "web";
    ContainerUsageContextEnum["Android"] = "android";
    ContainerUsageContextEnum["Ios"] = "ios";
    ContainerUsageContextEnum["AndroidSdk5"] = "androidSdk5";
    ContainerUsageContextEnum["IosSdk5"] = "iosSdk5";
    ContainerUsageContextEnum["Amp"] = "amp";
})(ContainerUsageContextEnum || (ContainerUsageContextEnum = {}));
// Container
/**
 * Represents a Google Tag Manager Container.
**/
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Container.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerId" }),
        __metadata("design:type", String)
    ], Container.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainName" }),
        __metadata("design:type", Array)
    ], Container.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabledBuiltInVariable" }),
        __metadata("design:type", Array)
    ], Container.prototype, "enabledBuiltInVariable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], Container.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Container.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], Container.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicId" }),
        __metadata("design:type", String)
    ], Container.prototype, "publicId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZoneCountryId" }),
        __metadata("design:type", String)
    ], Container.prototype, "timeZoneCountryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZoneId" }),
        __metadata("design:type", String)
    ], Container.prototype, "timeZoneId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageContext" }),
        __metadata("design:type", Array)
    ], Container.prototype, "usageContext", void 0);
    return Container;
}(SpeakeasyBase));
export { Container };
