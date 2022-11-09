import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleMapsUnityClientInfoPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED"
,    Editor = "EDITOR"
,    MacOs = "MAC_OS"
,    Windows = "WINDOWS"
,    Linux = "LINUX"
,    Android = "ANDROID"
,    Ios = "IOS"
,    WebGl = "WEB_GL"
}


// GoogleMapsUnityClientInfo
/** 
 * Client information.
**/
export class GoogleMapsUnityClientInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiClient" })
  apiClient?: string;

  @Metadata({ data: "json, name=applicationId" })
  applicationId?: string;

  @Metadata({ data: "json, name=applicationVersion" })
  applicationVersion?: string;

  @Metadata({ data: "json, name=deviceModel" })
  deviceModel?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=operatingSystem" })
  operatingSystem?: string;

  @Metadata({ data: "json, name=operatingSystemBuild" })
  operatingSystemBuild?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: GoogleMapsUnityClientInfoPlatformEnum;
}
