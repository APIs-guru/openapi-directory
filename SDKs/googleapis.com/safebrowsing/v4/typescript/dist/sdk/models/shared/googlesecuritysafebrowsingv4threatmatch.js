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
import { GoogleSecuritySafebrowsingV4ThreatEntry } from "./googlesecuritysafebrowsingv4threatentry";
import { GoogleSecuritySafebrowsingV4ThreatEntryMetadata } from "./googlesecuritysafebrowsingv4threatentrymetadata";
export var GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum;
(function (GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum) {
    GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum["PlatformTypeUnspecified"] = "PLATFORM_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum["Windows"] = "WINDOWS";
    GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum["Linux"] = "LINUX";
    GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum["Android"] = "ANDROID";
    GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum["Osx"] = "OSX";
    GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum["Ios"] = "IOS";
    GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum["AnyPlatform"] = "ANY_PLATFORM";
    GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum["AllPlatforms"] = "ALL_PLATFORMS";
    GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum["Chrome"] = "CHROME";
})(GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum || (GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum = {}));
export var GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum;
(function (GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum) {
    GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum["ThreatEntryTypeUnspecified"] = "THREAT_ENTRY_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum["Url"] = "URL";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum["Executable"] = "EXECUTABLE";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum["IpRange"] = "IP_RANGE";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum["ChromeExtension"] = "CHROME_EXTENSION";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum["Filename"] = "FILENAME";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum["Cert"] = "CERT";
})(GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum || (GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum = {}));
export var GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum;
(function (GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum) {
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["ThreatTypeUnspecified"] = "THREAT_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["Malware"] = "MALWARE";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["SocialEngineering"] = "SOCIAL_ENGINEERING";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["UnwantedSoftware"] = "UNWANTED_SOFTWARE";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["PotentiallyHarmfulApplication"] = "POTENTIALLY_HARMFUL_APPLICATION";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["SocialEngineeringInternal"] = "SOCIAL_ENGINEERING_INTERNAL";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["ApiAbuse"] = "API_ABUSE";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["MaliciousBinary"] = "MALICIOUS_BINARY";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["CsdWhitelist"] = "CSD_WHITELIST";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["CsdDownloadWhitelist"] = "CSD_DOWNLOAD_WHITELIST";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["ClientIncident"] = "CLIENT_INCIDENT";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["ClientIncidentWhitelist"] = "CLIENT_INCIDENT_WHITELIST";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["ApkMalwareOffline"] = "APK_MALWARE_OFFLINE";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["SubresourceFilter"] = "SUBRESOURCE_FILTER";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["Suspicious"] = "SUSPICIOUS";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["TrickToBill"] = "TRICK_TO_BILL";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["HighConfidenceAllowlist"] = "HIGH_CONFIDENCE_ALLOWLIST";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["AccuracyTips"] = "ACCURACY_TIPS";
    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum["SocialEngineeringLowerPrecision"] = "SOCIAL_ENGINEERING_LOWER_PRECISION";
})(GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum || (GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = {}));
// GoogleSecuritySafebrowsingV4ThreatMatch
/**
 * A match when checking a threat entry in the Safe Browsing threat lists.
**/
var GoogleSecuritySafebrowsingV4ThreatMatch = /** @class */ (function (_super) {
    __extends(GoogleSecuritySafebrowsingV4ThreatMatch, _super);
    function GoogleSecuritySafebrowsingV4ThreatMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cacheDuration" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatMatch.prototype, "cacheDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatMatch.prototype, "platformType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threat" }),
        __metadata("design:type", GoogleSecuritySafebrowsingV4ThreatEntry)
    ], GoogleSecuritySafebrowsingV4ThreatMatch.prototype, "threat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threatEntryMetadata" }),
        __metadata("design:type", GoogleSecuritySafebrowsingV4ThreatEntryMetadata)
    ], GoogleSecuritySafebrowsingV4ThreatMatch.prototype, "threatEntryMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threatEntryType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatMatch.prototype, "threatEntryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threatType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatMatch.prototype, "threatType", void 0);
    return GoogleSecuritySafebrowsingV4ThreatMatch;
}(SpeakeasyBase));
export { GoogleSecuritySafebrowsingV4ThreatMatch };
