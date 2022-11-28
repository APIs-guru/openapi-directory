import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsGroupsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsGroupsListQueryParams extends SpeakeasyBase {
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
export declare class VmmigrationProjectsLocationsGroupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsGroupsListRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsGroupsListPathParams;
    queryParams: VmmigrationProjectsLocationsGroupsListQueryParams;
    security: VmmigrationProjectsLocationsGroupsListSecurity;
}
export declare class VmmigrationProjectsLocationsGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    listGroupsResponse?: shared.ListGroupsResponse;
    statusCode: number;
}
