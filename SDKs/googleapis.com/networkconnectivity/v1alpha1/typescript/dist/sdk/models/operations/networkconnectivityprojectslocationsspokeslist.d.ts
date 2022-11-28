import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkconnectivityProjectsLocationsSpokesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkconnectivityProjectsLocationsSpokesListQueryParams extends SpeakeasyBase {
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
export declare class NetworkconnectivityProjectsLocationsSpokesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkconnectivityProjectsLocationsSpokesListRequest extends SpeakeasyBase {
    pathParams: NetworkconnectivityProjectsLocationsSpokesListPathParams;
    queryParams: NetworkconnectivityProjectsLocationsSpokesListQueryParams;
    security: NetworkconnectivityProjectsLocationsSpokesListSecurity;
}
export declare class NetworkconnectivityProjectsLocationsSpokesListResponse extends SpeakeasyBase {
    contentType: string;
    listSpokesResponse?: shared.ListSpokesResponse;
    statusCode: number;
}
