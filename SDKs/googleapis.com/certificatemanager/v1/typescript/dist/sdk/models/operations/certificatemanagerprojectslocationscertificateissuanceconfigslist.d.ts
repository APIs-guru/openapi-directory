import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListQueryParams extends SpeakeasyBase {
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
export declare class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListRequest extends SpeakeasyBase {
    pathParams: CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListPathParams;
    queryParams: CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListQueryParams;
    security: CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListSecurity;
}
export declare class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listCertificateIssuanceConfigsResponse?: shared.ListCertificateIssuanceConfigsResponse;
    statusCode: number;
}
