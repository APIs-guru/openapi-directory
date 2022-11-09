import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NetworkconnectivityProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworkconnectivityProjectsLocationsListQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkconnectivityProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkconnectivityProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: NetworkconnectivityProjectsLocationsListPathParams;
    queryParams: NetworkconnectivityProjectsLocationsListQueryParams;
    security: NetworkconnectivityProjectsLocationsListSecurity;
}
export declare class NetworkconnectivityProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
