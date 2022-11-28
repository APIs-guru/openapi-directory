import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsPrivateConnectionsRoutesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsRoutesListQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsPrivateConnectionsRoutesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsPrivateConnectionsRoutesListPathParams;
    queryParams: DatastreamProjectsLocationsPrivateConnectionsRoutesListQueryParams;
    security: DatastreamProjectsLocationsPrivateConnectionsRoutesListSecurity;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsRoutesListResponse extends SpeakeasyBase {
    contentType: string;
    listRoutesResponse?: shared.ListRoutesResponse;
    statusCode: number;
}
