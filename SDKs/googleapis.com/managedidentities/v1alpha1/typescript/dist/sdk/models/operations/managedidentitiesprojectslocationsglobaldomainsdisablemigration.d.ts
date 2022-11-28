import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationPathParams extends SpeakeasyBase {
    domain: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams;
    request?: Map<string, any>;
    security: ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
