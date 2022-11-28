import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ThreatEntrySet } from "./googlesecuritysafebrowsingv4threatentryset";
import { GoogleSecuritySafebrowsingV4Checksum } from "./googlesecuritysafebrowsingv4checksum";


export enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum {
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

export enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED",
    PartialUpdate = "PARTIAL_UPDATE",
    FullUpdate = "FULL_UPDATE"
}

export enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum {
    ThreatEntryTypeUnspecified = "THREAT_ENTRY_TYPE_UNSPECIFIED",
    Url = "URL",
    Executable = "EXECUTABLE",
    IpRange = "IP_RANGE",
    ChromeExtension = "CHROME_EXTENSION",
    Filename = "FILENAME",
    Cert = "CERT"
}

export enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum {
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


// GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse
/** 
 * An update to an individual list.
**/
export class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additions", elemType: GoogleSecuritySafebrowsingV4ThreatEntrySet })
  additions?: GoogleSecuritySafebrowsingV4ThreatEntrySet[];

  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: GoogleSecuritySafebrowsingV4Checksum;

  @SpeakeasyMetadata({ data: "json, name=newClientState" })
  newClientState?: string;

  @SpeakeasyMetadata({ data: "json, name=platformType" })
  platformType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=removals", elemType: GoogleSecuritySafebrowsingV4ThreatEntrySet })
  removals?: GoogleSecuritySafebrowsingV4ThreatEntrySet[];

  @SpeakeasyMetadata({ data: "json, name=responseType" })
  responseType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=threatEntryType" })
  threatEntryType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=threatType" })
  threatType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum;
}
