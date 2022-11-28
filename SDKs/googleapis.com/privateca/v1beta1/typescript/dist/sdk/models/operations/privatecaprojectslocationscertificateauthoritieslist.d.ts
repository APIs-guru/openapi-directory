import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesListQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesListRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateAuthoritiesListPathParams;
    queryParams: PrivatecaProjectsLocationsCertificateAuthoritiesListQueryParams;
    security: PrivatecaProjectsLocationsCertificateAuthoritiesListSecurity;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesListResponse extends SpeakeasyBase {
    contentType: string;
    listCertificateAuthoritiesResponse?: shared.ListCertificateAuthoritiesResponse;
    statusCode: number;
}
