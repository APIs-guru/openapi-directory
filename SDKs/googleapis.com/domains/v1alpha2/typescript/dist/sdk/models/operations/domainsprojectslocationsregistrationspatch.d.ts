import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DomainsProjectsLocationsRegistrationsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DomainsProjectsLocationsRegistrationsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsPatchRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsPatchPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsPatchQueryParams;
    request?: shared.RegistrationInput;
    security: DomainsProjectsLocationsRegistrationsPatchSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
