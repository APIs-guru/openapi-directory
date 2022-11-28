import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkconnectivityProjectsLocationsGlobalHubsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkconnectivityProjectsLocationsGlobalHubsListQueryParams extends SpeakeasyBase {
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
export declare class NetworkconnectivityProjectsLocationsGlobalHubsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkconnectivityProjectsLocationsGlobalHubsListRequest extends SpeakeasyBase {
    pathParams: NetworkconnectivityProjectsLocationsGlobalHubsListPathParams;
    queryParams: NetworkconnectivityProjectsLocationsGlobalHubsListQueryParams;
    security: NetworkconnectivityProjectsLocationsGlobalHubsListSecurity;
}
export declare class NetworkconnectivityProjectsLocationsGlobalHubsListResponse extends SpeakeasyBase {
    contentType: string;
    listHubsResponse?: shared.ListHubsResponse;
    statusCode: number;
}
