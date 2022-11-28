import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigProjectsConfigsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class RuntimeconfigProjectsConfigsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsSetIamPolicySecurity extends SpeakeasyBase {
    option1?: RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1;
    option2?: RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2;
}
export declare class RuntimeconfigProjectsConfigsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigProjectsConfigsSetIamPolicyPathParams;
    queryParams: RuntimeconfigProjectsConfigsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: RuntimeconfigProjectsConfigsSetIamPolicySecurity;
}
export declare class RuntimeconfigProjectsConfigsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
