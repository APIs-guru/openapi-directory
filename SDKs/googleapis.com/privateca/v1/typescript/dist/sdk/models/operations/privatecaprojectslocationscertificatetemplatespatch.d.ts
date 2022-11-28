import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateTemplatesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesPatchRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateTemplatesPatchPathParams;
    queryParams: PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams;
    request?: shared.CertificateTemplateInput;
    security: PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
