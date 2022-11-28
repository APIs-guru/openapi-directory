import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CertificatemanagerProjectsLocationsCertificateMapsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    certificateMapId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsCreateRequest extends SpeakeasyBase {
    pathParams: CertificatemanagerProjectsLocationsCertificateMapsCreatePathParams;
    queryParams: CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams;
    request?: shared.CertificateMapInput;
    security: CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity;
}
export declare class CertificatemanagerProjectsLocationsCertificateMapsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
