import { SpeakeasyBase } from "../../../internal/utils";
import { Explanation } from "./explanation";
import { Policy } from "./policy";
/**
 * A result of IAM Policy search, containing information of an IAM policy.
**/
export declare class IamPolicySearchResult extends SpeakeasyBase {
    assetType?: string;
    explanation?: Explanation;
    folders?: string[];
    organization?: string;
    policy?: Policy;
    project?: string;
    resource?: string;
}
