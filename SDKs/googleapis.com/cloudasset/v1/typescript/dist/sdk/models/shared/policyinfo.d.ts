import { SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
/**
 * The IAM policy and its attached resource.
**/
export declare class PolicyInfo extends SpeakeasyBase {
    attachedResource?: string;
    policy?: Policy;
}
