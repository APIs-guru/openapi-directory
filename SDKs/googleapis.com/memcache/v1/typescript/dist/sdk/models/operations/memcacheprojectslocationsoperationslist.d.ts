import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MemcacheProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MemcacheProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MemcacheProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MemcacheProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: MemcacheProjectsLocationsOperationsListPathParams;
    queryParams: MemcacheProjectsLocationsOperationsListQueryParams;
    security: MemcacheProjectsLocationsOperationsListSecurity;
}
export declare class MemcacheProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
