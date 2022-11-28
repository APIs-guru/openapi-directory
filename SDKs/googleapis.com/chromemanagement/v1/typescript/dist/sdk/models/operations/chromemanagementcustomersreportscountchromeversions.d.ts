import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromemanagementCustomersReportsCountChromeVersionsPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromemanagementCustomersReportsCountChromeVersionsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orgUnitId?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ChromemanagementCustomersReportsCountChromeVersionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromemanagementCustomersReportsCountChromeVersionsRequest extends SpeakeasyBase {
    pathParams: ChromemanagementCustomersReportsCountChromeVersionsPathParams;
    queryParams: ChromemanagementCustomersReportsCountChromeVersionsQueryParams;
    security: ChromemanagementCustomersReportsCountChromeVersionsSecurity;
}
export declare class ChromemanagementCustomersReportsCountChromeVersionsResponse extends SpeakeasyBase {
    contentType: string;
    googleChromeManagementV1CountChromeVersionsResponse?: shared.GoogleChromeManagementV1CountChromeVersionsResponse;
    statusCode: number;
}
