import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    certificateTemplateId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesCreateRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams;
    queryParams: PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams;
    request?: shared.CertificateTemplateInput;
    security: PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
