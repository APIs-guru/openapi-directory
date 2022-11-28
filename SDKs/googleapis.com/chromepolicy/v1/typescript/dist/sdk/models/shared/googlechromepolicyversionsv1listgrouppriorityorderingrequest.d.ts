import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
/**
 * Request message for listing the group priority ordering of an app.
**/
export declare class GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest extends SpeakeasyBase {
    policyNamespace?: string;
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
