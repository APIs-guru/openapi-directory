import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromemanagementCustomersTelemetryDevicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ChromemanagementCustomersTelemetryDevicesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ChromemanagementCustomersTelemetryDevicesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromemanagementCustomersTelemetryDevicesListRequest extends SpeakeasyBase {
    pathParams: ChromemanagementCustomersTelemetryDevicesListPathParams;
    queryParams: ChromemanagementCustomersTelemetryDevicesListQueryParams;
    security: ChromemanagementCustomersTelemetryDevicesListSecurity;
}
export declare class ChromemanagementCustomersTelemetryDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    googleChromeManagementV1ListTelemetryDevicesResponse?: shared.GoogleChromeManagementV1ListTelemetryDevicesResponse;
    statusCode: number;
}
