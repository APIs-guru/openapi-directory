import { SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";
/**
 * The request to lint a Cloud IAM policy object.
**/
export declare class LintPolicyRequest extends SpeakeasyBase {
    condition?: Expr;
    fullResourceName?: string;
}
