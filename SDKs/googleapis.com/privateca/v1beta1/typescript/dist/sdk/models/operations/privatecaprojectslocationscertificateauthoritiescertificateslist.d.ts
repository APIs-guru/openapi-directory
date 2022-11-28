import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListPathParams;
    queryParams: PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListQueryParams;
    security: PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListSecurity;
}
export declare class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListResponse extends SpeakeasyBase {
    contentType: string;
    listCertificatesResponse?: shared.ListCertificatesResponse;
    statusCode: number;
}
