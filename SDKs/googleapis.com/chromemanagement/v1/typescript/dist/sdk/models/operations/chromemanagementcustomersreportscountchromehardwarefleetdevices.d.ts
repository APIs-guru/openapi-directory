import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orgUnitId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest extends SpeakeasyBase {
    pathParams: ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesPathParams;
    queryParams: ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams;
    security: ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity;
}
export declare class ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse extends SpeakeasyBase {
    contentType: string;
    googleChromeManagementV1CountChromeHardwareFleetDevicesResponse?: shared.GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse;
    statusCode: number;
}
