import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
/**
 * Response message for listing the group priority ordering of an app.
**/
export declare class GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse extends SpeakeasyBase {
    groupIds?: string[];
    policyNamespace?: string;
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
