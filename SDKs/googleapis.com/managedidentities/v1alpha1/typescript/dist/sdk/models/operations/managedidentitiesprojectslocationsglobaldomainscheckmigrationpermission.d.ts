import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionPathParams extends SpeakeasyBase {
    domain: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionQueryParams;
    request?: Map<string, any>;
    security: ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionResponse extends SpeakeasyBase {
    checkMigrationPermissionResponse?: shared.CheckMigrationPermissionResponse;
    contentType: string;
    statusCode: number;
}
