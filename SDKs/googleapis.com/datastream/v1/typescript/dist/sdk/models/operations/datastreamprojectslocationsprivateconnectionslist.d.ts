import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsPrivateConnectionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsListQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsPrivateConnectionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsListRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsPrivateConnectionsListPathParams;
    queryParams: DatastreamProjectsLocationsPrivateConnectionsListQueryParams;
    security: DatastreamProjectsLocationsPrivateConnectionsListSecurity;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    listPrivateConnectionsResponse?: shared.ListPrivateConnectionsResponse;
    statusCode: number;
}
