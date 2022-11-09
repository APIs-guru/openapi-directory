import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleChromeManagementV1BrowserVersionChannelEnum {
    ReleaseChannelUnspecified = "RELEASE_CHANNEL_UNSPECIFIED"
,    Canary = "CANARY"
,    Dev = "DEV"
,    Beta = "BETA"
,    Stable = "STABLE"
}

export enum GoogleChromeManagementV1BrowserVersionSystemEnum {
    DeviceSystemUnspecified = "DEVICE_SYSTEM_UNSPECIFIED"
,    SystemOther = "SYSTEM_OTHER"
,    SystemAndroid = "SYSTEM_ANDROID"
,    SystemIos = "SYSTEM_IOS"
,    SystemCros = "SYSTEM_CROS"
,    SystemWindows = "SYSTEM_WINDOWS"
,    SystemMac = "SYSTEM_MAC"
,    SystemLinux = "SYSTEM_LINUX"
}


// GoogleChromeManagementV1BrowserVersion
/** 
 * Describes a browser version and its install count.
**/
export class GoogleChromeManagementV1BrowserVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: GoogleChromeManagementV1BrowserVersionChannelEnum;

  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=deviceOsVersion" })
  deviceOsVersion?: string;

  @Metadata({ data: "json, name=system" })
  system?: GoogleChromeManagementV1BrowserVersionSystemEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
