import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchPathParams;
    queryParams: PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchQueryParams;
    request?: shared.CertificateInput;
    security: PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchSecurity;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchResponse extends SpeakeasyBase {
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
}
