import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Authentication } from "./authentication";
import { ScanRun } from "./scanrun";
import { Schedule } from "./schedule";


export enum ScanConfigExportToSecurityCommandCenterEnum {
    ExportToSecurityCommandCenterUnspecified = "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}

export enum ScanConfigRiskLevelEnum {
    RiskLevelUnspecified = "RISK_LEVEL_UNSPECIFIED",
    Normal = "NORMAL",
    Low = "LOW"
}

export enum ScanConfigTargetPlatformsEnum {
    TargetPlatformUnspecified = "TARGET_PLATFORM_UNSPECIFIED",
    AppEngine = "APP_ENGINE",
    Compute = "COMPUTE",
    CloudRun = "CLOUD_RUN",
    CloudFunctions = "CLOUD_FUNCTIONS"
}

export enum ScanConfigUserAgentEnum {
    UserAgentUnspecified = "USER_AGENT_UNSPECIFIED",
    ChromeLinux = "CHROME_LINUX",
    ChromeAndroid = "CHROME_ANDROID",
    SafariIphone = "SAFARI_IPHONE"
}


// ScanConfig
/** 
 * A ScanConfig resource contains the configurations to launch a scan.
**/
export class ScanConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication?: Authentication;

  @SpeakeasyMetadata({ data: "json, name=blacklistPatterns" })
  blacklistPatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=exportToSecurityCommandCenter" })
  exportToSecurityCommandCenter?: ScanConfigExportToSecurityCommandCenterEnum;

  @SpeakeasyMetadata({ data: "json, name=ignoreHttpStatusErrors" })
  ignoreHttpStatusErrors?: boolean;

  @SpeakeasyMetadata({ data: "json, name=latestRun" })
  latestRun?: ScanRun;

  @SpeakeasyMetadata({ data: "json, name=managedScan" })
  managedScan?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxQps" })
  maxQps?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=riskLevel" })
  riskLevel?: ScanConfigRiskLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: Schedule;

  @SpeakeasyMetadata({ data: "json, name=startingUrls" })
  startingUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=staticIpScan" })
  staticIpScan?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetPlatforms" })
  targetPlatforms?: ScanConfigTargetPlatformsEnum[];

  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: ScanConfigUserAgentEnum;
}
