import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Policy } from "./policy";
/**
 * Request message for `SetIamPolicy` method.
**/
export declare class SetIamPolicyRequest extends SpeakeasyBase {
    policy?: Policy;
    updateMask?: string;
}
