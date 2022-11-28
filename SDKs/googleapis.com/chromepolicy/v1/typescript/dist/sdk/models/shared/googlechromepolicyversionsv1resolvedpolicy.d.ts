import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
import { GoogleChromePolicyVersionsV1PolicyValue } from "./googlechromepolicyversionsv1policyvalue";
/**
 * The resolved value of a policy for a given target.
**/
export declare class GoogleChromePolicyVersionsV1ResolvedPolicy extends SpeakeasyBase {
    addedSourceKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
    sourceKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
    targetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
    value?: GoogleChromePolicyVersionsV1PolicyValue;
}
