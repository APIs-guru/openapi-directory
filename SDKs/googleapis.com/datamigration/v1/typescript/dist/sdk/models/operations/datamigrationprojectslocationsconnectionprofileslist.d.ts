import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsConnectionProfilesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatamigrationProjectsLocationsConnectionProfilesListQueryParams extends SpeakeasyBase {
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
export declare class DatamigrationProjectsLocationsConnectionProfilesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsConnectionProfilesListRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsConnectionProfilesListPathParams;
    queryParams: DatamigrationProjectsLocationsConnectionProfilesListQueryParams;
    security: DatamigrationProjectsLocationsConnectionProfilesListSecurity;
}
export declare class DatamigrationProjectsLocationsConnectionProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    listConnectionProfilesResponse?: shared.ListConnectionProfilesResponse;
    statusCode: number;
}
