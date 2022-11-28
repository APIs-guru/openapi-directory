import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromemanagementCustomersReportsCountInstalledAppsPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromemanagementCustomersReportsCountInstalledAppsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
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
export declare class ChromemanagementCustomersReportsCountInstalledAppsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromemanagementCustomersReportsCountInstalledAppsRequest extends SpeakeasyBase {
    pathParams: ChromemanagementCustomersReportsCountInstalledAppsPathParams;
    queryParams: ChromemanagementCustomersReportsCountInstalledAppsQueryParams;
    security: ChromemanagementCustomersReportsCountInstalledAppsSecurity;
}
export declare class ChromemanagementCustomersReportsCountInstalledAppsResponse extends SpeakeasyBase {
    contentType: string;
    googleChromeManagementV1CountInstalledAppsResponse?: shared.GoogleChromeManagementV1CountInstalledAppsResponse;
    statusCode: number;
}
