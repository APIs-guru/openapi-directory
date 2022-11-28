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
import { GoogleSecuritySafebrowsingV4ThreatEntrySet } from "./googlesecuritysafebrowsingv4threatentryset";
import { GoogleSecuritySafebrowsingV4Checksum } from "./googlesecuritysafebrowsingv4checksum";
export var GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum;
(function (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum) {
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum["PlatformTypeUnspecified"] = "PLATFORM_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum["Windows"] = "WINDOWS";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum["Linux"] = "LINUX";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum["Android"] = "ANDROID";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum["Osx"] = "OSX";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum["Ios"] = "IOS";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum["AnyPlatform"] = "ANY_PLATFORM";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum["AllPlatforms"] = "ALL_PLATFORMS";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum["Chrome"] = "CHROME";
})(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum || (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum = {}));
export var GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum;
(function (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum) {
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum["ResponseTypeUnspecified"] = "RESPONSE_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum["PartialUpdate"] = "PARTIAL_UPDATE";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum["FullUpdate"] = "FULL_UPDATE";
})(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum || (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum = {}));
export var GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum;
(function (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum) {
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum["ThreatEntryTypeUnspecified"] = "THREAT_ENTRY_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum["Url"] = "URL";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum["Executable"] = "EXECUTABLE";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum["IpRange"] = "IP_RANGE";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum["ChromeExtension"] = "CHROME_EXTENSION";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum["Filename"] = "FILENAME";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum["Cert"] = "CERT";
})(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum || (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum = {}));
export var GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum;
(function (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum) {
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["ThreatTypeUnspecified"] = "THREAT_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["Malware"] = "MALWARE";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["SocialEngineering"] = "SOCIAL_ENGINEERING";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["UnwantedSoftware"] = "UNWANTED_SOFTWARE";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["PotentiallyHarmfulApplication"] = "POTENTIALLY_HARMFUL_APPLICATION";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["SocialEngineeringInternal"] = "SOCIAL_ENGINEERING_INTERNAL";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["ApiAbuse"] = "API_ABUSE";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["MaliciousBinary"] = "MALICIOUS_BINARY";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["CsdWhitelist"] = "CSD_WHITELIST";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["CsdDownloadWhitelist"] = "CSD_DOWNLOAD_WHITELIST";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["ClientIncident"] = "CLIENT_INCIDENT";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["ClientIncidentWhitelist"] = "CLIENT_INCIDENT_WHITELIST";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["ApkMalwareOffline"] = "APK_MALWARE_OFFLINE";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["SubresourceFilter"] = "SUBRESOURCE_FILTER";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["Suspicious"] = "SUSPICIOUS";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["TrickToBill"] = "TRICK_TO_BILL";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["HighConfidenceAllowlist"] = "HIGH_CONFIDENCE_ALLOWLIST";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["AccuracyTips"] = "ACCURACY_TIPS";
    GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum["SocialEngineeringLowerPrecision"] = "SOCIAL_ENGINEERING_LOWER_PRECISION";
})(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum || (GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum = {}));
// GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse
/**
 * An update to an individual list.
**/
var GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse = /** @class */ (function (_super) {
    __extends(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse, _super);
    function GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additions", elemType: GoogleSecuritySafebrowsingV4ThreatEntrySet }),
        __metadata("design:type", Array)
    ], GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse.prototype, "additions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checksum" }),
        __metadata("design:type", GoogleSecuritySafebrowsingV4Checksum)
    ], GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse.prototype, "checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newClientState" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse.prototype, "newClientState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse.prototype, "platformType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=removals", elemType: GoogleSecuritySafebrowsingV4ThreatEntrySet }),
        __metadata("design:type", Array)
    ], GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse.prototype, "removals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse.prototype, "responseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threatEntryType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse.prototype, "threatEntryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threatType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse.prototype, "threatType", void 0);
    return GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse;
}(SpeakeasyBase));
export { GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse };
