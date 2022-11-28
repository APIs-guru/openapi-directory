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
import { GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints } from "./googlesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequestconstraints";
export var GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum;
(function (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum) {
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum["PlatformTypeUnspecified"] = "PLATFORM_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum["Windows"] = "WINDOWS";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum["Linux"] = "LINUX";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum["Android"] = "ANDROID";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum["Osx"] = "OSX";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum["Ios"] = "IOS";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum["AnyPlatform"] = "ANY_PLATFORM";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum["AllPlatforms"] = "ALL_PLATFORMS";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum["Chrome"] = "CHROME";
})(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum || (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum = {}));
export var GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum;
(function (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum) {
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum["ThreatEntryTypeUnspecified"] = "THREAT_ENTRY_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum["Url"] = "URL";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum["Executable"] = "EXECUTABLE";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum["IpRange"] = "IP_RANGE";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum["ChromeExtension"] = "CHROME_EXTENSION";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum["Filename"] = "FILENAME";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum["Cert"] = "CERT";
})(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum || (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum = {}));
export var GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum;
(function (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum) {
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["ThreatTypeUnspecified"] = "THREAT_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["Malware"] = "MALWARE";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["SocialEngineering"] = "SOCIAL_ENGINEERING";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["UnwantedSoftware"] = "UNWANTED_SOFTWARE";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["PotentiallyHarmfulApplication"] = "POTENTIALLY_HARMFUL_APPLICATION";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["SocialEngineeringInternal"] = "SOCIAL_ENGINEERING_INTERNAL";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["ApiAbuse"] = "API_ABUSE";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["MaliciousBinary"] = "MALICIOUS_BINARY";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["CsdWhitelist"] = "CSD_WHITELIST";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["CsdDownloadWhitelist"] = "CSD_DOWNLOAD_WHITELIST";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["ClientIncident"] = "CLIENT_INCIDENT";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["ClientIncidentWhitelist"] = "CLIENT_INCIDENT_WHITELIST";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["ApkMalwareOffline"] = "APK_MALWARE_OFFLINE";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["SubresourceFilter"] = "SUBRESOURCE_FILTER";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["Suspicious"] = "SUSPICIOUS";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["TrickToBill"] = "TRICK_TO_BILL";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["HighConfidenceAllowlist"] = "HIGH_CONFIDENCE_ALLOWLIST";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["AccuracyTips"] = "ACCURACY_TIPS";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum["SocialEngineeringLowerPrecision"] = "SOCIAL_ENGINEERING_LOWER_PRECISION";
})(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum || (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum = {}));
// GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest
/**
 * A single list update request.
**/
var GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest = /** @class */ (function (_super) {
    __extends(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest, _super);
    function GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constraints" }),
        __metadata("design:type", GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints)
    ], GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest.prototype, "constraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest.prototype, "platformType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threatEntryType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest.prototype, "threatEntryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threatType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest.prototype, "threatType", void 0);
    return GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest;
}(SpeakeasyBase));
export { GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest };
