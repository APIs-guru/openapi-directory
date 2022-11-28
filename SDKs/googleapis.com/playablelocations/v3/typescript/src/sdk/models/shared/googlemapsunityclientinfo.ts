import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleMapsUnityClientInfoPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Editor = "EDITOR",
    MacOs = "MAC_OS",
    Windows = "WINDOWS",
    Linux = "LINUX",
    Android = "ANDROID",
    Ios = "IOS",
    WebGl = "WEB_GL"
}


// GoogleMapsUnityClientInfo
/** 
 * Client information.
**/
export class GoogleMapsUnityClientInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiClient" })
  apiClient?: string;

  @SpeakeasyMetadata({ data: "json, name=applicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=applicationVersion" })
  applicationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceModel" })
  deviceModel?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=operatingSystem" })
  operatingSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=operatingSystemBuild" })
  operatingSystemBuild?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: GoogleMapsUnityClientInfoPlatformEnum;
}
