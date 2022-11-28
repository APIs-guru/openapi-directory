import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleChromeManagementV1InstalledAppAppInstallTypeEnum {
    AppInstallTypeUnspecified = "APP_INSTALL_TYPE_UNSPECIFIED",
    Multiple = "MULTIPLE",
    Normal = "NORMAL",
    Admin = "ADMIN",
    Development = "DEVELOPMENT",
    Sideload = "SIDELOAD",
    Other = "OTHER"
}
export declare enum GoogleChromeManagementV1InstalledAppAppSourceEnum {
    AppSourceUnspecified = "APP_SOURCE_UNSPECIFIED",
    ChromeWebstore = "CHROME_WEBSTORE",
    PlayStore = "PLAY_STORE"
}
export declare enum GoogleChromeManagementV1InstalledAppAppTypeEnum {
    AppTypeUnspecified = "APP_TYPE_UNSPECIFIED",
    Extension = "EXTENSION",
    App = "APP",
    Theme = "THEME",
    HostedApp = "HOSTED_APP",
    AndroidApp = "ANDROID_APP"
}
/**
 * Describes an installed app.
**/
export declare class GoogleChromeManagementV1InstalledApp extends SpeakeasyBase {
    appId?: string;
    appInstallType?: GoogleChromeManagementV1InstalledAppAppInstallTypeEnum;
    appSource?: GoogleChromeManagementV1InstalledAppAppSourceEnum;
    appType?: GoogleChromeManagementV1InstalledAppAppTypeEnum;
    browserDeviceCount?: string;
    description?: string;
    disabled?: boolean;
    displayName?: string;
    homepageUri?: string;
    osUserCount?: string;
    permissions?: string[];
}
