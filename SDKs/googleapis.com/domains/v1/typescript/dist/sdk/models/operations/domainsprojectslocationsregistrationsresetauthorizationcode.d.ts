import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsResetAuthorizationCodePathParams extends SpeakeasyBase {
    registration: string;
}
export declare class DomainsProjectsLocationsRegistrationsResetAuthorizationCodeQueryParams extends SpeakeasyBase {
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
export declare class DomainsProjectsLocationsRegistrationsResetAuthorizationCodeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsResetAuthorizationCodeRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsResetAuthorizationCodePathParams;
    queryParams: DomainsProjectsLocationsRegistrationsResetAuthorizationCodeQueryParams;
    request?: Map<string, any>;
    security: DomainsProjectsLocationsRegistrationsResetAuthorizationCodeSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsResetAuthorizationCodeResponse extends SpeakeasyBase {
    authorizationCode?: shared.AuthorizationCode;
    contentType: string;
    statusCode: number;
}
