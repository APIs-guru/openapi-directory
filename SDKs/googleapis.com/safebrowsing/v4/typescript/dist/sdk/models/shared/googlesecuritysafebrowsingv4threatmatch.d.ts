import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ThreatEntry } from "./googlesecuritysafebrowsingv4threatentry";
import { GoogleSecuritySafebrowsingV4ThreatEntryMetadata } from "./googlesecuritysafebrowsingv4threatentrymetadata";
export declare enum GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum {
    PlatformTypeUnspecified = "PLATFORM_TYPE_UNSPECIFIED",
    Windows = "WINDOWS",
    Linux = "LINUX",
    Android = "ANDROID",
    Osx = "OSX",
    Ios = "IOS",
    AnyPlatform = "ANY_PLATFORM",
    AllPlatforms = "ALL_PLATFORMS",
    Chrome = "CHROME"
}
export declare enum GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum {
    ThreatEntryTypeUnspecified = "THREAT_ENTRY_TYPE_UNSPECIFIED",
    Url = "URL",
    Executable = "EXECUTABLE",
    IpRange = "IP_RANGE",
    ChromeExtension = "CHROME_EXTENSION",
    Filename = "FILENAME",
    Cert = "CERT"
}
export declare enum GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED",
    Malware = "MALWARE",
    SocialEngineering = "SOCIAL_ENGINEERING",
    UnwantedSoftware = "UNWANTED_SOFTWARE",
    PotentiallyHarmfulApplication = "POTENTIALLY_HARMFUL_APPLICATION",
    SocialEngineeringInternal = "SOCIAL_ENGINEERING_INTERNAL",
    ApiAbuse = "API_ABUSE",
    MaliciousBinary = "MALICIOUS_BINARY",
    CsdWhitelist = "CSD_WHITELIST",
    CsdDownloadWhitelist = "CSD_DOWNLOAD_WHITELIST",
    ClientIncident = "CLIENT_INCIDENT",
    ClientIncidentWhitelist = "CLIENT_INCIDENT_WHITELIST",
    ApkMalwareOffline = "APK_MALWARE_OFFLINE",
    SubresourceFilter = "SUBRESOURCE_FILTER",
    Suspicious = "SUSPICIOUS",
    TrickToBill = "TRICK_TO_BILL",
    HighConfidenceAllowlist = "HIGH_CONFIDENCE_ALLOWLIST",
    AccuracyTips = "ACCURACY_TIPS",
    SocialEngineeringLowerPrecision = "SOCIAL_ENGINEERING_LOWER_PRECISION"
}
/**
 * A match when checking a threat entry in the Safe Browsing threat lists.
**/
export declare class GoogleSecuritySafebrowsingV4ThreatMatch extends SpeakeasyBase {
    cacheDuration?: string;
    platformType?: GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum;
    threat?: GoogleSecuritySafebrowsingV4ThreatEntry;
    threatEntryMetadata?: GoogleSecuritySafebrowsingV4ThreatEntryMetadata;
    threatEntryType?: GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum;
    threatType?: GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum;
}
