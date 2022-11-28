import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListQueryParams;
    security: ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListResponse extends SpeakeasyBase {
    contentType: string;
    listBackupsResponse?: shared.ListBackupsResponse;
    statusCode: number;
}
