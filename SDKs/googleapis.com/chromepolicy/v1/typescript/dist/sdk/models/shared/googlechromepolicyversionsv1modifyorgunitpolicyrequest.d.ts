import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
import { GoogleChromePolicyVersionsV1PolicyValue } from "./googlechromepolicyversionsv1policyvalue";
/**
 * Request parameters for modifying a policy value for a specific org unit target.
**/
export declare class GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest extends SpeakeasyBase {
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
    policyValue?: GoogleChromePolicyVersionsV1PolicyValue;
    updateMask?: string;
}
