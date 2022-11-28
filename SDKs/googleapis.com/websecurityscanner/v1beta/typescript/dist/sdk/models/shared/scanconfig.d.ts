import { SpeakeasyBase } from "../../../internal/utils";
import { Authentication } from "./authentication";
import { ScanRun } from "./scanrun";
import { Schedule } from "./schedule";
export declare enum ScanConfigExportToSecurityCommandCenterEnum {
    ExportToSecurityCommandCenterUnspecified = "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare enum ScanConfigRiskLevelEnum {
    RiskLevelUnspecified = "RISK_LEVEL_UNSPECIFIED",
    Normal = "NORMAL",
    Low = "LOW"
}
export declare enum ScanConfigTargetPlatformsEnum {
    TargetPlatformUnspecified = "TARGET_PLATFORM_UNSPECIFIED",
    AppEngine = "APP_ENGINE",
    Compute = "COMPUTE",
    CloudRun = "CLOUD_RUN",
    CloudFunctions = "CLOUD_FUNCTIONS"
}
export declare enum ScanConfigUserAgentEnum {
    UserAgentUnspecified = "USER_AGENT_UNSPECIFIED",
    ChromeLinux = "CHROME_LINUX",
    ChromeAndroid = "CHROME_ANDROID",
    SafariIphone = "SAFARI_IPHONE"
}
/**
 * A ScanConfig resource contains the configurations to launch a scan.
**/
export declare class ScanConfig extends SpeakeasyBase {
    authentication?: Authentication;
    blacklistPatterns?: string[];
    displayName?: string;
    exportToSecurityCommandCenter?: ScanConfigExportToSecurityCommandCenterEnum;
    ignoreHttpStatusErrors?: boolean;
    latestRun?: ScanRun;
    managedScan?: boolean;
    maxQps?: number;
    name?: string;
    riskLevel?: ScanConfigRiskLevelEnum;
    schedule?: Schedule;
    startingUrls?: string[];
    staticIpScan?: boolean;
    targetPlatforms?: ScanConfigTargetPlatformsEnum[];
    userAgent?: ScanConfigUserAgentEnum;
}
