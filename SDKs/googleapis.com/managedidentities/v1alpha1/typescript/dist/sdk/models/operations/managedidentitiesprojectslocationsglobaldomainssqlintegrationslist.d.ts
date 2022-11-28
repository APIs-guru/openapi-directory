import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListQueryParams;
    security: ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListResponse extends SpeakeasyBase {
    contentType: string;
    listSqlIntegrationsResponse?: shared.ListSqlIntegrationsResponse;
    statusCode: number;
}
