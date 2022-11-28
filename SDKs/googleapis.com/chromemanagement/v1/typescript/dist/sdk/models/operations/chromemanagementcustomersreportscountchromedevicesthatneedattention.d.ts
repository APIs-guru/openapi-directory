import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionQueryParams extends SpeakeasyBase {
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
export declare class ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest extends SpeakeasyBase {
    pathParams: ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionPathParams;
    queryParams: ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionQueryParams;
    security: ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionSecurity;
}
export declare class ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse extends SpeakeasyBase {
    contentType: string;
    googleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse?: shared.GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse;
    statusCode: number;
}
