import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CertificatemanagerProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CertificatemanagerProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CertificatemanagerProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CertificatemanagerProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: CertificatemanagerProjectsLocationsOperationsListPathParams;
    queryParams: CertificatemanagerProjectsLocationsOperationsListQueryParams;
    security: CertificatemanagerProjectsLocationsOperationsListSecurity;
}
export declare class CertificatemanagerProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
