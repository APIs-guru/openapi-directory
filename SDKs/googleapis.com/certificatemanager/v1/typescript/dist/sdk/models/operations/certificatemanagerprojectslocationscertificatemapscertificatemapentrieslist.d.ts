import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListQueryParams extends SpeakeasyBase {
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
export declare class CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListRequest extends SpeakeasyBase {
    pathParams: CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListPathParams;
    queryParams: CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListQueryParams;
    security: CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListSecurity;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListResponse extends SpeakeasyBase {
    contentType: string;
    listCertificateMapEntriesResponse?: shared.ListCertificateMapEntriesResponse;
    statusCode: number;
}
