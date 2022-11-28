import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
/**
 * Request parameters for deleting the policy value of a specific group target.
**/
export declare class GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest extends SpeakeasyBase {
    policySchema?: string;
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
