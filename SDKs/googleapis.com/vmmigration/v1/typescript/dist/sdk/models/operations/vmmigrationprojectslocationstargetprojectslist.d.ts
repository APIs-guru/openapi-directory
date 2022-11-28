import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsTargetProjectsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsTargetProjectsListQueryParams extends SpeakeasyBase {
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
export declare class VmmigrationProjectsLocationsTargetProjectsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsTargetProjectsListRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsTargetProjectsListPathParams;
    queryParams: VmmigrationProjectsLocationsTargetProjectsListQueryParams;
    security: VmmigrationProjectsLocationsTargetProjectsListSecurity;
}
export declare class VmmigrationProjectsLocationsTargetProjectsListResponse extends SpeakeasyBase {
    contentType: string;
    listTargetProjectsResponse?: shared.ListTargetProjectsResponse;
    statusCode: number;
}
