import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsStreamsObjectsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatastreamProjectsLocationsStreamsObjectsListQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsStreamsObjectsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsStreamsObjectsListRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsStreamsObjectsListPathParams;
    queryParams: DatastreamProjectsLocationsStreamsObjectsListQueryParams;
    security: DatastreamProjectsLocationsStreamsObjectsListSecurity;
}
export declare class DatastreamProjectsLocationsStreamsObjectsListResponse extends SpeakeasyBase {
    contentType: string;
    listStreamObjectsResponse?: shared.ListStreamObjectsResponse;
    statusCode: number;
}
