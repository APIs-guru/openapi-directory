import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NetworkconnectivityProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworkconnectivityProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class NetworkconnectivityProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkconnectivityProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: NetworkconnectivityProjectsLocationsOperationsListPathParams;
    queryParams: NetworkconnectivityProjectsLocationsOperationsListQueryParams;
    security: NetworkconnectivityProjectsLocationsOperationsListSecurity;
}
export declare class NetworkconnectivityProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}
