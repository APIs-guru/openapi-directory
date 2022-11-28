import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Escalation } from "./escalation";



// EscalateCaseRequest
/** 
 * The request message for the EscalateCase endpoint.
**/
export class EscalateCaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=escalation" })
  escalation?: Escalation;
}
