import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MemcacheProjectsLocationsInstancesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MemcacheProjectsLocationsInstancesListQueryParams extends SpeakeasyBase {
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
export declare class MemcacheProjectsLocationsInstancesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MemcacheProjectsLocationsInstancesListRequest extends SpeakeasyBase {
    pathParams: MemcacheProjectsLocationsInstancesListPathParams;
    queryParams: MemcacheProjectsLocationsInstancesListQueryParams;
    security: MemcacheProjectsLocationsInstancesListSecurity;
}
export declare class MemcacheProjectsLocationsInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    listInstancesResponse?: shared.ListInstancesResponse;
    statusCode: number;
}
