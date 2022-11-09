import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Expr } from "./expr";


// LintPolicyRequest
/** 
 * The request to lint a Cloud IAM policy object.
**/
export class LintPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: Expr;

  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;
}
