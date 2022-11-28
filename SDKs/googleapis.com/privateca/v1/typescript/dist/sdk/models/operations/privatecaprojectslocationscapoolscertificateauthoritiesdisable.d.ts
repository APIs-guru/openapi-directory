import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisablePathParams extends SpeakeasyBase {
    name: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisablePathParams;
    queryParams: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams;
    request?: shared.DisableCertificateAuthorityRequest;
    security: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
