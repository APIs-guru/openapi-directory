import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsGrpcRoutesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkservicesProjectsLocationsGrpcRoutesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkservicesProjectsLocationsGrpcRoutesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsGrpcRoutesListRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsGrpcRoutesListPathParams;
    queryParams: NetworkservicesProjectsLocationsGrpcRoutesListQueryParams;
    security: NetworkservicesProjectsLocationsGrpcRoutesListSecurity;
}
export declare class NetworkservicesProjectsLocationsGrpcRoutesListResponse extends SpeakeasyBase {
    contentType: string;
    listGrpcRoutesResponse?: shared.ListGrpcRoutesResponse;
    statusCode: number;
}
