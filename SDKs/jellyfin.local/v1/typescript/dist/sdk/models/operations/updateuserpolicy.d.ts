import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserPolicyPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UpdateUserPolicyRequestsInput extends SpeakeasyBase {
    userPolicy?: shared.UserPolicyInput;
    userPolicy1?: shared.UserPolicyInput;
    userPolicy2?: shared.UserPolicyInput;
}
export declare class UpdateUserPolicySecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateUserPolicyRequest extends SpeakeasyBase {
    pathParams: UpdateUserPolicyPathParams;
    request: UpdateUserPolicyRequestsInput;
    security: UpdateUserPolicySecurity;
}
export declare class UpdateUserPolicyResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
