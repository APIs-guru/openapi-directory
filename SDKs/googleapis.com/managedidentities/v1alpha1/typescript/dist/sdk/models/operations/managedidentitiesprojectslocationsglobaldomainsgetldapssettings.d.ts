import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams;
    security: ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse extends SpeakeasyBase {
    contentType: string;
    ldapsSettings?: shared.LdapsSettings;
    statusCode: number;
}
