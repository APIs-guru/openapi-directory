import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListPathParams;
    queryParams: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListQueryParams;
    security: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListSecurity;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListResponse extends SpeakeasyBase {
    contentType: string;
    listCertificateRevocationListsResponse?: shared.ListCertificateRevocationListsResponse;
    statusCode: number;
}
