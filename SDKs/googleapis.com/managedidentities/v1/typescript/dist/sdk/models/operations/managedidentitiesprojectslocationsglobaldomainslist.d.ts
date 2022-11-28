import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsListQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsListRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalDomainsListPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalDomainsListQueryParams;
    security: ManagedidentitiesProjectsLocationsGlobalDomainsListSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsListResponse extends SpeakeasyBase {
    contentType: string;
    listDomainsResponse?: shared.ListDomainsResponse;
    statusCode: number;
}
