import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigProjectsConfigsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class RuntimeconfigProjectsConfigsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsGetIamPolicySecurity extends SpeakeasyBase {
    option1?: RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1;
    option2?: RuntimeconfigProjectsConfigsGetIamPolicySecurityOption2;
}
export declare class RuntimeconfigProjectsConfigsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigProjectsConfigsGetIamPolicyPathParams;
    queryParams: RuntimeconfigProjectsConfigsGetIamPolicyQueryParams;
    security: RuntimeconfigProjectsConfigsGetIamPolicySecurity;
}
export declare class RuntimeconfigProjectsConfigsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
