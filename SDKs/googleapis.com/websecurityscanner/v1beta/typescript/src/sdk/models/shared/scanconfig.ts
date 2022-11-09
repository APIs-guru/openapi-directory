import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Authentication } from "./authentication";
import { ScanRun } from "./scanrun";
import { Schedule } from "./schedule";

export enum ScanConfigExportToSecurityCommandCenterEnum {
    ExportToSecurityCommandCenterUnspecified = "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED"
,    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}

export enum ScanConfigRiskLevelEnum {
    RiskLevelUnspecified = "RISK_LEVEL_UNSPECIFIED"
,    Normal = "NORMAL"
,    Low = "LOW"
}

export enum ScanConfigTargetPlatformsEnum {
    TargetPlatformUnspecified = "TARGET_PLATFORM_UNSPECIFIED"
,    AppEngine = "APP_ENGINE"
,    Compute = "COMPUTE"
,    CloudRun = "CLOUD_RUN"
,    CloudFunctions = "CLOUD_FUNCTIONS"
}

export enum ScanConfigUserAgentEnum {
    UserAgentUnspecified = "USER_AGENT_UNSPECIFIED"
,    ChromeLinux = "CHROME_LINUX"
,    ChromeAndroid = "CHROME_ANDROID"
,    SafariIphone = "SAFARI_IPHONE"
}


// ScanConfig
/** 
 * A ScanConfig resource contains the configurations to launch a scan.
**/
export class ScanConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=authentication" })
  authentication?: Authentication;

  @Metadata({ data: "json, name=blacklistPatterns" })
  blacklistPatterns?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=exportToSecurityCommandCenter" })
  exportToSecurityCommandCenter?: ScanConfigExportToSecurityCommandCenterEnum;

  @Metadata({ data: "json, name=ignoreHttpStatusErrors" })
  ignoreHttpStatusErrors?: boolean;

  @Metadata({ data: "json, name=latestRun" })
  latestRun?: ScanRun;

  @Metadata({ data: "json, name=managedScan" })
  managedScan?: boolean;

  @Metadata({ data: "json, name=maxQps" })
  maxQps?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=riskLevel" })
  riskLevel?: ScanConfigRiskLevelEnum;

  @Metadata({ data: "json, name=schedule" })
  schedule?: Schedule;

  @Metadata({ data: "json, name=startingUrls" })
  startingUrls?: string[];

  @Metadata({ data: "json, name=staticIpScan" })
  staticIpScan?: boolean;

  @Metadata({ data: "json, name=targetPlatforms" })
  targetPlatforms?: ScanConfigTargetPlatformsEnum[];

  @Metadata({ data: "json, name=userAgent" })
  userAgent?: ScanConfigUserAgentEnum;
}
