import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CertificatemanagerProjectsLocationsCertificatesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CertificatemanagerProjectsLocationsCertificatesListQueryParams extends SpeakeasyBase {
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
export declare class CertificatemanagerProjectsLocationsCertificatesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CertificatemanagerProjectsLocationsCertificatesListRequest extends SpeakeasyBase {
    pathParams: CertificatemanagerProjectsLocationsCertificatesListPathParams;
    queryParams: CertificatemanagerProjectsLocationsCertificatesListQueryParams;
    security: CertificatemanagerProjectsLocationsCertificatesListSecurity;
}
export declare class CertificatemanagerProjectsLocationsCertificatesListResponse extends SpeakeasyBase {
    contentType: string;
    listCertificatesResponse?: shared.ListCertificatesResponse;
    statusCode: number;
}
