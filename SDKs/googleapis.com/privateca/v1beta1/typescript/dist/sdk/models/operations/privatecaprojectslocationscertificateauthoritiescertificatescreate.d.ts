import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    certificateId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreatePathParams;
    queryParams: PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams;
    request?: shared.CertificateInput;
    security: PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateSecurity;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateResponse extends SpeakeasyBase {
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
}
