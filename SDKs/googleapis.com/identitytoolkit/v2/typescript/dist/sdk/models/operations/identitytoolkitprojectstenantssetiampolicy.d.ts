import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class IdentitytoolkitProjectsTenantsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsSetIamPolicySecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsSetIamPolicyPathParams;
    queryParams: IdentitytoolkitProjectsTenantsSetIamPolicyQueryParams;
    request?: shared.GoogleIamV1SetIamPolicyRequest;
    security: IdentitytoolkitProjectsTenantsSetIamPolicySecurity;
}
export declare class IdentitytoolkitProjectsTenantsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
