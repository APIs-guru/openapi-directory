import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListQueryParams extends SpeakeasyBase {
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
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListPathParams;
    queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListQueryParams;
    security: VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listCloneJobsResponse?: shared.ListCloneJobsResponse;
    statusCode: number;
}
