import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CertificatemanagerProjectsLocationsCertificateMapsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsListQueryParams extends SpeakeasyBase {
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
export declare class CertificatemanagerProjectsLocationsCertificateMapsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsListRequest extends SpeakeasyBase {
    pathParams: CertificatemanagerProjectsLocationsCertificateMapsListPathParams;
    queryParams: CertificatemanagerProjectsLocationsCertificateMapsListQueryParams;
    security: CertificatemanagerProjectsLocationsCertificateMapsListSecurity;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsListResponse extends SpeakeasyBase {
    contentType: string;
    listCertificateMapsResponse?: shared.ListCertificateMapsResponse;
    statusCode: number;
}
