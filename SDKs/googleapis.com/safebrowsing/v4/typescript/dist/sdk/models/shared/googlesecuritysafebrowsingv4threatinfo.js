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
export var GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum;
(function (GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum) {
    GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum["PlatformTypeUnspecified"] = "PLATFORM_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum["Windows"] = "WINDOWS";
    GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum["Linux"] = "LINUX";
    GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum["Android"] = "ANDROID";
    GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum["Osx"] = "OSX";
    GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum["Ios"] = "IOS";
    GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum["AnyPlatform"] = "ANY_PLATFORM";
    GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum["AllPlatforms"] = "ALL_PLATFORMS";
    GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum["Chrome"] = "CHROME";
})(GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum || (GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum = {}));
export var GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum;
(function (GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum) {
    GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum["ThreatEntryTypeUnspecified"] = "THREAT_ENTRY_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum["Url"] = "URL";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum["Executable"] = "EXECUTABLE";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum["IpRange"] = "IP_RANGE";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum["ChromeExtension"] = "CHROME_EXTENSION";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum["Filename"] = "FILENAME";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum["Cert"] = "CERT";
})(GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum || (GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum = {}));
export var GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum;
(function (GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum) {
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["ThreatTypeUnspecified"] = "THREAT_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["Malware"] = "MALWARE";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["SocialEngineering"] = "SOCIAL_ENGINEERING";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["UnwantedSoftware"] = "UNWANTED_SOFTWARE";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["PotentiallyHarmfulApplication"] = "POTENTIALLY_HARMFUL_APPLICATION";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["SocialEngineeringInternal"] = "SOCIAL_ENGINEERING_INTERNAL";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["ApiAbuse"] = "API_ABUSE";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["MaliciousBinary"] = "MALICIOUS_BINARY";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["CsdWhitelist"] = "CSD_WHITELIST";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["CsdDownloadWhitelist"] = "CSD_DOWNLOAD_WHITELIST";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["ClientIncident"] = "CLIENT_INCIDENT";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["ClientIncidentWhitelist"] = "CLIENT_INCIDENT_WHITELIST";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["ApkMalwareOffline"] = "APK_MALWARE_OFFLINE";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["SubresourceFilter"] = "SUBRESOURCE_FILTER";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["Suspicious"] = "SUSPICIOUS";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["TrickToBill"] = "TRICK_TO_BILL";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["HighConfidenceAllowlist"] = "HIGH_CONFIDENCE_ALLOWLIST";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["AccuracyTips"] = "ACCURACY_TIPS";
    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum["SocialEngineeringLowerPrecision"] = "SOCIAL_ENGINEERING_LOWER_PRECISION";
})(GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum || (GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = {}));
// GoogleSecuritySafebrowsingV4ThreatInfo
/**
 * The information regarding one or more threats that a client submits when checking for matches in threat lists.
**/
var GoogleSecuritySafebrowsingV4ThreatInfo = /** @class */ (function (_super) {
    __extends(GoogleSecuritySafebrowsingV4ThreatInfo, _super);
    function GoogleSecuritySafebrowsingV4ThreatInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformTypes" }),
        __metadata("design:type", Array)
    ], GoogleSecuritySafebrowsingV4ThreatInfo.prototype, "platformTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threatEntries", elemType: GoogleSecuritySafebrowsingV4ThreatEntry }),
        __metadata("design:type", Array)
    ], GoogleSecuritySafebrowsingV4ThreatInfo.prototype, "threatEntries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threatEntryTypes" }),
        __metadata("design:type", Array)
    ], GoogleSecuritySafebrowsingV4ThreatInfo.prototype, "threatEntryTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threatTypes" }),
        __metadata("design:type", Array)
    ], GoogleSecuritySafebrowsingV4ThreatInfo.prototype, "threatTypes", void 0);
    return GoogleSecuritySafebrowsingV4ThreatInfo;
}(SpeakeasyBase));
export { GoogleSecuritySafebrowsingV4ThreatInfo };
