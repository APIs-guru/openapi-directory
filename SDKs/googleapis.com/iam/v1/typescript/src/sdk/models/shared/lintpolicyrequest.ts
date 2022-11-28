import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";



// LintPolicyRequest
/** 
 * The request to lint a Cloud IAM policy object.
**/
export class LintPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: Expr;

  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;
}
