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
import { GoogleSecuritySafebrowsingV4ClientInfo } from "./googlesecuritysafebrowsingv4clientinfo";
import { GoogleSecuritySafebrowsingV4ThreatEntry } from "./googlesecuritysafebrowsingv4threatentry";
import { GoogleSecuritySafebrowsingV4ThreatHitThreatSource } from "./googlesecuritysafebrowsingv4threathitthreatsource";
import { GoogleSecuritySafebrowsingV4ThreatHitUserInfo } from "./googlesecuritysafebrowsingv4threathituserinfo";
export var GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum;
(function (GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum) {
    GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum["PlatformTypeUnspecified"] = "PLATFORM_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum["Windows"] = "WINDOWS";
    GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum["Linux"] = "LINUX";
    GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum["Android"] = "ANDROID";
    GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum["Osx"] = "OSX";
    GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum["Ios"] = "IOS";
    GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum["AnyPlatform"] = "ANY_PLATFORM";
    GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum["AllPlatforms"] = "ALL_PLATFORMS";
    GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum["Chrome"] = "CHROME";
})(GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum || (GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum = {}));
export var GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum;
(function (GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum) {
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["ThreatTypeUnspecified"] = "THREAT_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["Malware"] = "MALWARE";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["SocialEngineering"] = "SOCIAL_ENGINEERING";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["UnwantedSoftware"] = "UNWANTED_SOFTWARE";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["PotentiallyHarmfulApplication"] = "POTENTIALLY_HARMFUL_APPLICATION";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["SocialEngineeringInternal"] = "SOCIAL_ENGINEERING_INTERNAL";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["ApiAbuse"] = "API_ABUSE";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["MaliciousBinary"] = "MALICIOUS_BINARY";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["CsdWhitelist"] = "CSD_WHITELIST";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["CsdDownloadWhitelist"] = "CSD_DOWNLOAD_WHITELIST";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["ClientIncident"] = "CLIENT_INCIDENT";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["ClientIncidentWhitelist"] = "CLIENT_INCIDENT_WHITELIST";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["ApkMalwareOffline"] = "APK_MALWARE_OFFLINE";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["SubresourceFilter"] = "SUBRESOURCE_FILTER";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["Suspicious"] = "SUSPICIOUS";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["TrickToBill"] = "TRICK_TO_BILL";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["HighConfidenceAllowlist"] = "HIGH_CONFIDENCE_ALLOWLIST";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["AccuracyTips"] = "ACCURACY_TIPS";
    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum["SocialEngineeringLowerPrecision"] = "SOCIAL_ENGINEERING_LOWER_PRECISION";
})(GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum || (GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = {}));
var GoogleSecuritySafebrowsingV4ThreatHit = /** @class */ (function (_super) {
    __extends(GoogleSecuritySafebrowsingV4ThreatHit, _super);
    function GoogleSecuritySafebrowsingV4ThreatHit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientInfo" }),
        __metadata("design:type", GoogleSecuritySafebrowsingV4ClientInfo)
    ], GoogleSecuritySafebrowsingV4ThreatHit.prototype, "clientInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entry" }),
        __metadata("design:type", GoogleSecuritySafebrowsingV4ThreatEntry)
    ], GoogleSecuritySafebrowsingV4ThreatHit.prototype, "entry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatHit.prototype, "platformType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GoogleSecuritySafebrowsingV4ThreatHitThreatSource }),
        __metadata("design:type", Array)
    ], GoogleSecuritySafebrowsingV4ThreatHit.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threatType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatHit.prototype, "threatType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", GoogleSecuritySafebrowsingV4ThreatHitUserInfo)
    ], GoogleSecuritySafebrowsingV4ThreatHit.prototype, "userInfo", void 0);
    return GoogleSecuritySafebrowsingV4ThreatHit;
}(SpeakeasyBase));
export { GoogleSecuritySafebrowsingV4ThreatHit };
