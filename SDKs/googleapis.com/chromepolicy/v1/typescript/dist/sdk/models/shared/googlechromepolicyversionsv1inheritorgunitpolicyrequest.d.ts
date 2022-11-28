import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
/**
 * Request parameters for inheriting policy value of a specific org unit target from the policy value of its parent org unit.
**/
export declare class GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest extends SpeakeasyBase {
    policySchema?: string;
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
