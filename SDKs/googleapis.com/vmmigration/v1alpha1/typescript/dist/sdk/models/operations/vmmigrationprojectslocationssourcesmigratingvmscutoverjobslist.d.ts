import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListQueryParams extends SpeakeasyBase {
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
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListPathParams;
    queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListQueryParams;
    security: VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listCutoverJobsResponse?: shared.ListCutoverJobsResponse;
    statusCode: number;
}
