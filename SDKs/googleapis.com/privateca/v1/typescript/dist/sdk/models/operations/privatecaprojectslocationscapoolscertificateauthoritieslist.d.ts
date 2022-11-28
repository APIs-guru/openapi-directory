import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListPathParams;
    queryParams: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListQueryParams;
    security: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListSecurity;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListResponse extends SpeakeasyBase {
    contentType: string;
    listCertificateAuthoritiesResponse?: shared.ListCertificateAuthoritiesResponse;
    statusCode: number;
}
