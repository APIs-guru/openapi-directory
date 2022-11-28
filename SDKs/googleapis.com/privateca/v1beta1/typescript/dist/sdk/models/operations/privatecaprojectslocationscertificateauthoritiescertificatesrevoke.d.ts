import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokePathParams extends SpeakeasyBase {
    name: string;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokePathParams;
    queryParams: PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeQueryParams;
    request?: shared.RevokeCertificateRequest;
    security: PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeSecurity;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeResponse extends SpeakeasyBase {
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
}
