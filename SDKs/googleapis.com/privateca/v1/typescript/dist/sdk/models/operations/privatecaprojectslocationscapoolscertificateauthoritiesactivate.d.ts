import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams;
    queryParams: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams;
    request?: shared.ActivateCertificateAuthorityRequest;
    security: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
