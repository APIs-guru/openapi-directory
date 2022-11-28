import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleChromeManagementV1InstalledAppAppInstallTypeEnum {
    AppInstallTypeUnspecified = "APP_INSTALL_TYPE_UNSPECIFIED",
    Multiple = "MULTIPLE",
    Normal = "NORMAL",
    Admin = "ADMIN",
    Development = "DEVELOPMENT",
    Sideload = "SIDELOAD",
    Other = "OTHER"
}

export enum GoogleChromeManagementV1InstalledAppAppSourceEnum {
    AppSourceUnspecified = "APP_SOURCE_UNSPECIFIED",
    ChromeWebstore = "CHROME_WEBSTORE",
    PlayStore = "PLAY_STORE"
}

export enum GoogleChromeManagementV1InstalledAppAppTypeEnum {
    AppTypeUnspecified = "APP_TYPE_UNSPECIFIED",
    Extension = "EXTENSION",
    App = "APP",
    Theme = "THEME",
    HostedApp = "HOSTED_APP",
    AndroidApp = "ANDROID_APP"
}


// GoogleChromeManagementV1InstalledApp
/** 
 * Describes an installed app.
**/
export class GoogleChromeManagementV1InstalledApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=appInstallType" })
  appInstallType?: GoogleChromeManagementV1InstalledAppAppInstallTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=appSource" })
  appSource?: GoogleChromeManagementV1InstalledAppAppSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=appType" })
  appType?: GoogleChromeManagementV1InstalledAppAppTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=browserDeviceCount" })
  browserDeviceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=homepageUri" })
  homepageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=osUserCount" })
  osUserCount?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
