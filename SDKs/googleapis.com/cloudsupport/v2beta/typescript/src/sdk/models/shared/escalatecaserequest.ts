import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Escalation } from "./escalation";


// EscalateCaseRequest
/** 
 * The request message for the EscalateCase endpoint.
**/
export class EscalateCaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=escalation" })
  escalation?: Escalation;
}
