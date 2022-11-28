import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordQueryParams;
    request?: Map<string, any>;
    security: ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordResponse extends SpeakeasyBase {
    contentType: string;
    resetAdminPasswordResponse?: shared.ResetAdminPasswordResponse;
    statusCode: number;
}
