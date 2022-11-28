import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CertificatemanagerProjectsLocationsCertificatesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CertificatemanagerProjectsLocationsCertificatesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    certificateId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CertificatemanagerProjectsLocationsCertificatesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CertificatemanagerProjectsLocationsCertificatesCreateRequest extends SpeakeasyBase {
    pathParams: CertificatemanagerProjectsLocationsCertificatesCreatePathParams;
    queryParams: CertificatemanagerProjectsLocationsCertificatesCreateQueryParams;
    request?: shared.CertificateInput;
    security: CertificatemanagerProjectsLocationsCertificatesCreateSecurity;
}
export declare class CertificatemanagerProjectsLocationsCertificatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
