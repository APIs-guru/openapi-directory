import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    certificateIssuanceConfigId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest extends SpeakeasyBase {
    pathParams: CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams;
    queryParams: CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams;
    request?: shared.CertificateIssuanceConfigInput;
    security: CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity;
}
export declare class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
