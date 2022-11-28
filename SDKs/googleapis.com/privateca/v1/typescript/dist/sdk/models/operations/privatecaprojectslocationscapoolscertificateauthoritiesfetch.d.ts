import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchPathParams;
    queryParams: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchQueryParams;
    security: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchSecurity;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchResponse extends SpeakeasyBase {
    contentType: string;
    fetchCertificateAuthorityCsrResponse?: shared.FetchCertificateAuthorityCsrResponse;
    statusCode: number;
}
