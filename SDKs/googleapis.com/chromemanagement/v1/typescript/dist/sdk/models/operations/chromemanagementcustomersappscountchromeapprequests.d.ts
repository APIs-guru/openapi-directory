import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromemanagementCustomersAppsCountChromeAppRequestsPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromemanagementCustomersAppsCountChromeAppRequestsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
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
export declare class ChromemanagementCustomersAppsCountChromeAppRequestsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromemanagementCustomersAppsCountChromeAppRequestsRequest extends SpeakeasyBase {
    pathParams: ChromemanagementCustomersAppsCountChromeAppRequestsPathParams;
    queryParams: ChromemanagementCustomersAppsCountChromeAppRequestsQueryParams;
    security: ChromemanagementCustomersAppsCountChromeAppRequestsSecurity;
}
export declare class ChromemanagementCustomersAppsCountChromeAppRequestsResponse extends SpeakeasyBase {
    contentType: string;
    googleChromeManagementV1CountChromeAppRequestsResponse?: shared.GoogleChromeManagementV1CountChromeAppRequestsResponse;
    statusCode: number;
}
