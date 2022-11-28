import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromemanagementCustomersTelemetryDevicesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ChromemanagementCustomersTelemetryDevicesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ChromemanagementCustomersTelemetryDevicesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromemanagementCustomersTelemetryDevicesGetRequest extends SpeakeasyBase {
    pathParams: ChromemanagementCustomersTelemetryDevicesGetPathParams;
    queryParams: ChromemanagementCustomersTelemetryDevicesGetQueryParams;
    security: ChromemanagementCustomersTelemetryDevicesGetSecurity;
}
export declare class ChromemanagementCustomersTelemetryDevicesGetResponse extends SpeakeasyBase {
    contentType: string;
    googleChromeManagementV1TelemetryDevice?: shared.GoogleChromeManagementV1TelemetryDevice;
    statusCode: number;
}
