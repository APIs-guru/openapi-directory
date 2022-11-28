import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsConnectionProfilesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatastreamProjectsLocationsConnectionProfilesListQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsConnectionProfilesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsConnectionProfilesListRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsConnectionProfilesListPathParams;
    queryParams: DatastreamProjectsLocationsConnectionProfilesListQueryParams;
    security: DatastreamProjectsLocationsConnectionProfilesListSecurity;
}
export declare class DatastreamProjectsLocationsConnectionProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    listConnectionProfilesResponse?: shared.ListConnectionProfilesResponse;
    statusCode: number;
}
