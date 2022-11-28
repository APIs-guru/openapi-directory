import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
/**
 * Request message for updating the group priority ordering of an app.
**/
export declare class GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest extends SpeakeasyBase {
    groupIds?: string[];
    policyNamespace?: string;
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
