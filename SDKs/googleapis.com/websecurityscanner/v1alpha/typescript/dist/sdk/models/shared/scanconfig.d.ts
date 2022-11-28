import { SpeakeasyBase } from "../../../internal/utils";
import { Authentication } from "./authentication";
import { ScanRun } from "./scanrun";
import { Schedule } from "./schedule";
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
 * A ScanConfig resource contains the configurations to launch a scan. next id: 12
**/
export declare class ScanConfig extends SpeakeasyBase {
    authentication?: Authentication;
    blacklistPatterns?: string[];
    displayName?: string;
    latestRun?: ScanRun;
    maxQps?: number;
    name?: string;
    schedule?: Schedule;
    startingUrls?: string[];
    targetPlatforms?: ScanConfigTargetPlatformsEnum[];
    userAgent?: ScanConfigUserAgentEnum;
}
