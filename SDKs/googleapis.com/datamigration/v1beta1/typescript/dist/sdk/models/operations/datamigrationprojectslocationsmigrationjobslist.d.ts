import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsMigrationJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsListQueryParams extends SpeakeasyBase {
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
export declare class DatamigrationProjectsLocationsMigrationJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsMigrationJobsListRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsMigrationJobsListPathParams;
    queryParams: DatamigrationProjectsLocationsMigrationJobsListQueryParams;
    security: DatamigrationProjectsLocationsMigrationJobsListSecurity;
}
export declare class DatamigrationProjectsLocationsMigrationJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listMigrationJobsResponse?: shared.ListMigrationJobsResponse;
    statusCode: number;
}
