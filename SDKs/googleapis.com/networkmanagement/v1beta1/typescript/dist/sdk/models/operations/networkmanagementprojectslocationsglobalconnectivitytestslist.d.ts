import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsListRequest extends SpeakeasyBase {
    pathParams: NetworkmanagementProjectsLocationsGlobalConnectivityTestsListPathParams;
    queryParams: NetworkmanagementProjectsLocationsGlobalConnectivityTestsListQueryParams;
    security: NetworkmanagementProjectsLocationsGlobalConnectivityTestsListSecurity;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsListResponse extends SpeakeasyBase {
    contentType: string;
    listConnectivityTestsResponse?: shared.ListConnectivityTestsResponse;
    statusCode: number;
}
