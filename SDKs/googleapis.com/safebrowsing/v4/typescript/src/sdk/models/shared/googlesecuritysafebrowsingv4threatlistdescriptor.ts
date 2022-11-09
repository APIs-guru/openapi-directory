import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum {
    PlatformTypeUnspecified = "PLATFORM_TYPE_UNSPECIFIED"
,    Windows = "WINDOWS"
,    Linux = "LINUX"
,    Android = "ANDROID"
,    Osx = "OSX"
,    Ios = "IOS"
,    AnyPlatform = "ANY_PLATFORM"
,    AllPlatforms = "ALL_PLATFORMS"
,    Chrome = "CHROME"
}

export enum GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum {
    ThreatEntryTypeUnspecified = "THREAT_ENTRY_TYPE_UNSPECIFIED"
,    Url = "URL"
,    Executable = "EXECUTABLE"
,    IpRange = "IP_RANGE"
,    ChromeExtension = "CHROME_EXTENSION"
,    Filename = "FILENAME"
,    Cert = "CERT"
}

export enum GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED"
,    Malware = "MALWARE"
,    SocialEngineering = "SOCIAL_ENGINEERING"
,    UnwantedSoftware = "UNWANTED_SOFTWARE"
,    PotentiallyHarmfulApplication = "POTENTIALLY_HARMFUL_APPLICATION"
,    SocialEngineeringInternal = "SOCIAL_ENGINEERING_INTERNAL"
,    ApiAbuse = "API_ABUSE"
,    MaliciousBinary = "MALICIOUS_BINARY"
,    CsdWhitelist = "CSD_WHITELIST"
,    CsdDownloadWhitelist = "CSD_DOWNLOAD_WHITELIST"
,    ClientIncident = "CLIENT_INCIDENT"
,    ClientIncidentWhitelist = "CLIENT_INCIDENT_WHITELIST"
,    ApkMalwareOffline = "APK_MALWARE_OFFLINE"
,    SubresourceFilter = "SUBRESOURCE_FILTER"
,    Suspicious = "SUSPICIOUS"
,    TrickToBill = "TRICK_TO_BILL"
,    HighConfidenceAllowlist = "HIGH_CONFIDENCE_ALLOWLIST"
,    AccuracyTips = "ACCURACY_TIPS"
,    SocialEngineeringLowerPrecision = "SOCIAL_ENGINEERING_LOWER_PRECISION"
}


// GoogleSecuritySafebrowsingV4ThreatListDescriptor
/** 
 * Describes an individual threat list. A list is defined by three parameters: the type of threat posed, the type of platform targeted by the threat, and the type of entries in the list.
**/
export class GoogleSecuritySafebrowsingV4ThreatListDescriptor extends SpeakeasyBase {
  @Metadata({ data: "json, name=platformType" })
  platformType?: GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum;

  @Metadata({ data: "json, name=threatEntryType" })
  threatEntryType?: GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum;

  @Metadata({ data: "json, name=threatType" })
  threatType?: GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum;
}
