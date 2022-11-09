import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Authentication } from "./authentication";
import { ScanRun } from "./scanrun";
import { Schedule } from "./schedule";

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
 * A ScanConfig resource contains the configurations to launch a scan. next id: 12
**/
export class ScanConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=authentication" })
  authentication?: Authentication;

  @Metadata({ data: "json, name=blacklistPatterns" })
  blacklistPatterns?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=latestRun" })
  latestRun?: ScanRun;

  @Metadata({ data: "json, name=maxQps" })
  maxQps?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: Schedule;

  @Metadata({ data: "json, name=startingUrls" })
  startingUrls?: string[];

  @Metadata({ data: "json, name=targetPlatforms" })
  targetPlatforms?: ScanConfigTargetPlatformsEnum[];

  @Metadata({ data: "json, name=userAgent" })
  userAgent?: ScanConfigUserAgentEnum;
}
