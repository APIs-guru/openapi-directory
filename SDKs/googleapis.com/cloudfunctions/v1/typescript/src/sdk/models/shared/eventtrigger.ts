import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailurePolicy } from "./failurepolicy";



// EventTrigger
/** 
 * Describes EventTrigger, used to request events be sent from another service.
**/
export class EventTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=failurePolicy" })
  failurePolicy?: FailurePolicy;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}
