import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    certificateMapEntryId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest extends SpeakeasyBase {
    pathParams: CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreatePathParams;
    queryParams: CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateQueryParams;
    request?: shared.CertificateMapEntryInput;
    security: CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateSecurity;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
