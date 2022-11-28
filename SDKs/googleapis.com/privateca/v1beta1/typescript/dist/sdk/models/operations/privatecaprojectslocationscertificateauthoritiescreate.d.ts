import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCreateQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCreateRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateAuthoritiesCreatePathParams;
    queryParams: PrivatecaProjectsLocationsCertificateAuthoritiesCreateQueryParams;
    request?: shared.CertificateAuthorityInput;
    security: PrivatecaProjectsLocationsCertificateAuthoritiesCreateSecurity;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
