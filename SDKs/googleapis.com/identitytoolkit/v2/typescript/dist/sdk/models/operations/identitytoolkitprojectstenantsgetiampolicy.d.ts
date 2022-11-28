import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsGetIamPolicySecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsGetIamPolicyPathParams;
    queryParams: IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams;
    request?: shared.GoogleIamV1GetIamPolicyRequest;
    security: IdentitytoolkitProjectsTenantsGetIamPolicySecurity;
}
export declare class IdentitytoolkitProjectsTenantsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
