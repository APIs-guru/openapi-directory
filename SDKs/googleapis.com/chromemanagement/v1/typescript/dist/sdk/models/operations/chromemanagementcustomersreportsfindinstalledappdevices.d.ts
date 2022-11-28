import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams extends SpeakeasyBase {
    customer: string;
}
export declare enum ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum {
    AppTypeUnspecified = "APP_TYPE_UNSPECIFIED",
    Extension = "EXTENSION",
    App = "APP",
    Theme = "THEME",
    HostedApp = "HOSTED_APP",
    AndroidApp = "ANDROID_APP"
}
export declare class ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    appId?: string;
    appType?: ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    orgUnitId?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromemanagementCustomersReportsFindInstalledAppDevicesRequest extends SpeakeasyBase {
    pathParams: ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams;
    queryParams: ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams;
    security: ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity;
}
export declare class ChromemanagementCustomersReportsFindInstalledAppDevicesResponse extends SpeakeasyBase {
    contentType: string;
    googleChromeManagementV1FindInstalledAppDevicesResponse?: shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse;
    statusCode: number;
}
