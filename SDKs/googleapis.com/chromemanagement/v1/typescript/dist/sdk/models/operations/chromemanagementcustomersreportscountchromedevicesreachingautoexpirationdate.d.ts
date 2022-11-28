import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxAueDate?: string;
    minAueDate?: string;
    oauthToken?: string;
    orgUnitId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest extends SpeakeasyBase {
    pathParams: ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams;
    queryParams: ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams;
    security: ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity;
}
export declare class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse extends SpeakeasyBase {
    contentType: string;
    googleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse?: shared.GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse;
    statusCode: number;
}
