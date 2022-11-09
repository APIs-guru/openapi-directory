import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleChromeManagementV1InstalledAppAppInstallTypeEnum {
    AppInstallTypeUnspecified = "APP_INSTALL_TYPE_UNSPECIFIED"
,    Multiple = "MULTIPLE"
,    Normal = "NORMAL"
,    Admin = "ADMIN"
,    Development = "DEVELOPMENT"
,    Sideload = "SIDELOAD"
,    Other = "OTHER"
}

export enum GoogleChromeManagementV1InstalledAppAppSourceEnum {
    AppSourceUnspecified = "APP_SOURCE_UNSPECIFIED"
,    ChromeWebstore = "CHROME_WEBSTORE"
,    PlayStore = "PLAY_STORE"
}

export enum GoogleChromeManagementV1InstalledAppAppTypeEnum {
    AppTypeUnspecified = "APP_TYPE_UNSPECIFIED"
,    Extension = "EXTENSION"
,    App = "APP"
,    Theme = "THEME"
,    HostedApp = "HOSTED_APP"
,    AndroidApp = "ANDROID_APP"
}


// GoogleChromeManagementV1InstalledApp
/** 
 * Describes an installed app.
**/
export class GoogleChromeManagementV1InstalledApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=appInstallType" })
  appInstallType?: GoogleChromeManagementV1InstalledAppAppInstallTypeEnum;

  @Metadata({ data: "json, name=appSource" })
  appSource?: GoogleChromeManagementV1InstalledAppAppSourceEnum;

  @Metadata({ data: "json, name=appType" })
  appType?: GoogleChromeManagementV1InstalledAppAppTypeEnum;

  @Metadata({ data: "json, name=browserDeviceCount" })
  browserDeviceCount?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=homepageUri" })
  homepageUri?: string;

  @Metadata({ data: "json, name=osUserCount" })
  osUserCount?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}
