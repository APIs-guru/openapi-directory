import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ThreatEntry } from "./googlesecuritysafebrowsingv4threatentry";


export enum GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum {
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

export enum GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum {
    ThreatEntryTypeUnspecified = "THREAT_ENTRY_TYPE_UNSPECIFIED",
    Url = "URL",
    Executable = "EXECUTABLE",
    IpRange = "IP_RANGE",
    ChromeExtension = "CHROME_EXTENSION",
    Filename = "FILENAME",
    Cert = "CERT"
}

export enum GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum {
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


// GoogleSecuritySafebrowsingV4ThreatInfo
/** 
 * The information regarding one or more threats that a client submits when checking for matches in threat lists.
**/
export class GoogleSecuritySafebrowsingV4ThreatInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=platformTypes" })
  platformTypes?: GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=threatEntries", elemType: GoogleSecuritySafebrowsingV4ThreatEntry })
  threatEntries?: GoogleSecuritySafebrowsingV4ThreatEntry[];

  @SpeakeasyMetadata({ data: "json, name=threatEntryTypes" })
  threatEntryTypes?: GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=threatTypes" })
  threatTypes?: GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum[];
}
