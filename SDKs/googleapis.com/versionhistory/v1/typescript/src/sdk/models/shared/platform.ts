import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlatformPlatformTypeEnum {
    PlatformTypeUnspecified = "PLATFORM_TYPE_UNSPECIFIED"
,    Win = "WIN"
,    Win64 = "WIN64"
,    Mac = "MAC"
,    Linux = "LINUX"
,    Android = "ANDROID"
,    Webview = "WEBVIEW"
,    Ios = "IOS"
,    All = "ALL"
,    MacArm64 = "MAC_ARM64"
,    Lacros = "LACROS"
,    LacrosArm32 = "LACROS_ARM32"
,    Chromeos = "CHROMEOS"
,    LacrosArm64 = "LACROS_ARM64"
}


// Platform
/** 
 * Each Platform is owned by a Product and owns a collection of channels. Available platforms are listed in Platform enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).
**/
export class Platform extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=platformType" })
  platformType?: PlatformPlatformTypeEnum;
}
