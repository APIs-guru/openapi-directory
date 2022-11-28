import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyPathParams;
    queryParams: PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicySecurity;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
