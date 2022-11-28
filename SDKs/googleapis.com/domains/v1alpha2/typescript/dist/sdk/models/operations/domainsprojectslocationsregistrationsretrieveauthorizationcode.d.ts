import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodePathParams extends SpeakeasyBase {
    registration: string;
}
export declare class DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams extends SpeakeasyBase {
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
export declare class DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodePathParams;
    queryParams: DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams;
    security: DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse extends SpeakeasyBase {
    authorizationCode?: shared.AuthorizationCode;
    contentType: string;
    statusCode: number;
}
