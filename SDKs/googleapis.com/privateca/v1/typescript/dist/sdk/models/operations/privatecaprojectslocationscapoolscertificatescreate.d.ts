import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCaPoolsCertificatesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    certificateId?: string;
    fields?: string;
    issuingCertificateAuthorityId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCaPoolsCertificatesCreatePathParams;
    queryParams: PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams;
    request?: shared.CertificateInput;
    security: PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse extends SpeakeasyBase {
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
}
