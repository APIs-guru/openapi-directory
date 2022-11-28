import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsStreamsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatastreamProjectsLocationsStreamsListQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsStreamsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsStreamsListRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsStreamsListPathParams;
    queryParams: DatastreamProjectsLocationsStreamsListQueryParams;
    security: DatastreamProjectsLocationsStreamsListSecurity;
}
export declare class DatastreamProjectsLocationsStreamsListResponse extends SpeakeasyBase {
    contentType: string;
    listStreamsResponse?: shared.ListStreamsResponse;
    statusCode: number;
}
