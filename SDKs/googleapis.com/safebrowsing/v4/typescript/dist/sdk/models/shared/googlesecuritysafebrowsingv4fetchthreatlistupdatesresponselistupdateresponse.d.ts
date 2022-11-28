import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ThreatEntrySet } from "./googlesecuritysafebrowsingv4threatentryset";
import { GoogleSecuritySafebrowsingV4Checksum } from "./googlesecuritysafebrowsingv4checksum";
export declare enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum {
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
export declare enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED",
    PartialUpdate = "PARTIAL_UPDATE",
    FullUpdate = "FULL_UPDATE"
}
export declare enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum {
    ThreatEntryTypeUnspecified = "THREAT_ENTRY_TYPE_UNSPECIFIED",
    Url = "URL",
    Executable = "EXECUTABLE",
    IpRange = "IP_RANGE",
    ChromeExtension = "CHROME_EXTENSION",
    Filename = "FILENAME",
    Cert = "CERT"
}
export declare enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum {
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
 * An update to an individual list.
**/
export declare class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse extends SpeakeasyBase {
    additions?: GoogleSecuritySafebrowsingV4ThreatEntrySet[];
    checksum?: GoogleSecuritySafebrowsingV4Checksum;
    newClientState?: string;
    platformType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum;
    removals?: GoogleSecuritySafebrowsingV4ThreatEntrySet[];
    responseType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum;
    threatEntryType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum;
    threatType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum;
}
