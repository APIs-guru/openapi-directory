import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailurePolicy } from "./failurepolicy";


// EventTrigger
/** 
 * Describes EventTrigger, used to request events be sent from another service.
**/
export class EventTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventType" })
  eventType?: string;

  @Metadata({ data: "json, name=failurePolicy" })
  failurePolicy?: FailurePolicy;

  @Metadata({ data: "json, name=resource" })
  resource?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;
}
