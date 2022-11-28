import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    certificateAuthorityId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreatePathParams;
    queryParams: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams;
    request?: shared.CertificateAuthorityInput;
    security: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
