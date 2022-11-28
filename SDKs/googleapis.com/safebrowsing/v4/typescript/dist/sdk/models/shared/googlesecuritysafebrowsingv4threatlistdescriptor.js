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
export var GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum;
(function (GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum) {
    GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum["PlatformTypeUnspecified"] = "PLATFORM_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum["Windows"] = "WINDOWS";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum["Linux"] = "LINUX";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum["Android"] = "ANDROID";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum["Osx"] = "OSX";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum["Ios"] = "IOS";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum["AnyPlatform"] = "ANY_PLATFORM";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum["AllPlatforms"] = "ALL_PLATFORMS";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum["Chrome"] = "CHROME";
})(GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum || (GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum = {}));
export var GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum;
(function (GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum) {
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum["ThreatEntryTypeUnspecified"] = "THREAT_ENTRY_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum["Url"] = "URL";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum["Executable"] = "EXECUTABLE";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum["IpRange"] = "IP_RANGE";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum["ChromeExtension"] = "CHROME_EXTENSION";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum["Filename"] = "FILENAME";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum["Cert"] = "CERT";
})(GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum || (GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum = {}));
export var GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum;
(function (GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum) {
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["ThreatTypeUnspecified"] = "THREAT_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["Malware"] = "MALWARE";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["SocialEngineering"] = "SOCIAL_ENGINEERING";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["UnwantedSoftware"] = "UNWANTED_SOFTWARE";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["PotentiallyHarmfulApplication"] = "POTENTIALLY_HARMFUL_APPLICATION";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["SocialEngineeringInternal"] = "SOCIAL_ENGINEERING_INTERNAL";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["ApiAbuse"] = "API_ABUSE";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["MaliciousBinary"] = "MALICIOUS_BINARY";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["CsdWhitelist"] = "CSD_WHITELIST";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["CsdDownloadWhitelist"] = "CSD_DOWNLOAD_WHITELIST";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["ClientIncident"] = "CLIENT_INCIDENT";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["ClientIncidentWhitelist"] = "CLIENT_INCIDENT_WHITELIST";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["ApkMalwareOffline"] = "APK_MALWARE_OFFLINE";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["SubresourceFilter"] = "SUBRESOURCE_FILTER";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["Suspicious"] = "SUSPICIOUS";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["TrickToBill"] = "TRICK_TO_BILL";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["HighConfidenceAllowlist"] = "HIGH_CONFIDENCE_ALLOWLIST";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["AccuracyTips"] = "ACCURACY_TIPS";
    GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum["SocialEngineeringLowerPrecision"] = "SOCIAL_ENGINEERING_LOWER_PRECISION";
})(GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum || (GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum = {}));
// GoogleSecuritySafebrowsingV4ThreatListDescriptor
/**
 * Describes an individual threat list. A list is defined by three parameters: the type of threat posed, the type of platform targeted by the threat, and the type of entries in the list.
**/
var GoogleSecuritySafebrowsingV4ThreatListDescriptor = /** @class */ (function (_super) {
    __extends(GoogleSecuritySafebrowsingV4ThreatListDescriptor, _super);
    function GoogleSecuritySafebrowsingV4ThreatListDescriptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatListDescriptor.prototype, "platformType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threatEntryType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatListDescriptor.prototype, "threatEntryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threatType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatListDescriptor.prototype, "threatType", void 0);
    return GoogleSecuritySafebrowsingV4ThreatListDescriptor;
}(SpeakeasyBase));
export { GoogleSecuritySafebrowsingV4ThreatListDescriptor };
