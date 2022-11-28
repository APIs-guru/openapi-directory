import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesFetchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesFetchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesFetchRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateAuthoritiesFetchPathParams;
    queryParams: PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams;
    security: PrivatecaProjectsLocationsCertificateAuthoritiesFetchSecurity;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse extends SpeakeasyBase {
    contentType: string;
    fetchCertificateAuthorityCsrResponse?: shared.FetchCertificateAuthorityCsrResponse;
    statusCode: number;
}
