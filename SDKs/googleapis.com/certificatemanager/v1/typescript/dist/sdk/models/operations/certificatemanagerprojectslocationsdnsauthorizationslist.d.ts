import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CertificatemanagerProjectsLocationsDnsAuthorizationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams extends SpeakeasyBase {
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
export declare class CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest extends SpeakeasyBase {
    pathParams: CertificatemanagerProjectsLocationsDnsAuthorizationsListPathParams;
    queryParams: CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams;
    security: CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity;
}
export declare class CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse extends SpeakeasyBase {
    contentType: string;
    listDnsAuthorizationsResponse?: shared.ListDnsAuthorizationsResponse;
    statusCode: number;
}
