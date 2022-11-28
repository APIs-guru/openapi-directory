import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsSourcesListQueryParams extends SpeakeasyBase {
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
export declare class VmmigrationProjectsLocationsSourcesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesListRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesListPathParams;
    queryParams: VmmigrationProjectsLocationsSourcesListQueryParams;
    security: VmmigrationProjectsLocationsSourcesListSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesListResponse extends SpeakeasyBase {
    contentType: string;
    listSourcesResponse?: shared.ListSourcesResponse;
    statusCode: number;
}
