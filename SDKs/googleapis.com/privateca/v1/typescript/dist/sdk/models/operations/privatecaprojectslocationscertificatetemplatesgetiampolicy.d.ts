import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyPathParams;
    queryParams: PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams;
    security: PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
