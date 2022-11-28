import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ClientInfo } from "./googlesecuritysafebrowsingv4clientinfo";
import { GoogleSecuritySafebrowsingV4ThreatEntry } from "./googlesecuritysafebrowsingv4threatentry";
import { GoogleSecuritySafebrowsingV4ThreatHitThreatSource } from "./googlesecuritysafebrowsingv4threathitthreatsource";
import { GoogleSecuritySafebrowsingV4ThreatHitUserInfo } from "./googlesecuritysafebrowsingv4threathituserinfo";


export enum GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum {
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

export enum GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum {
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


export class GoogleSecuritySafebrowsingV4ThreatHit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientInfo" })
  clientInfo?: GoogleSecuritySafebrowsingV4ClientInfo;

  @SpeakeasyMetadata({ data: "json, name=entry" })
  entry?: GoogleSecuritySafebrowsingV4ThreatEntry;

  @SpeakeasyMetadata({ data: "json, name=platformType" })
  platformType?: GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GoogleSecuritySafebrowsingV4ThreatHitThreatSource })
  resources?: GoogleSecuritySafebrowsingV4ThreatHitThreatSource[];

  @SpeakeasyMetadata({ data: "json, name=threatType" })
  threatType?: GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: GoogleSecuritySafebrowsingV4ThreatHitUserInfo;
}
