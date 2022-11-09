import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Explanation } from "./explanation";
import { Policy } from "./policy";
/**
 * The result for an IAM policy search.
**/
export declare class IamPolicySearchResult extends SpeakeasyBase {
    explanation?: Explanation;
    policy?: Policy;
    project?: string;
    resource?: string;
}
