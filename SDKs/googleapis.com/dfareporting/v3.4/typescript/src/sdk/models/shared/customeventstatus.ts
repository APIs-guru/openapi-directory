import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomEvent } from "./customevent";
import { CustomEventError } from "./customeventerror";



// CustomEventStatus
/** 
 * The original custom event that was inserted and whether there were any errors.
**/
export class CustomEventStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customEvent" })
  customEvent?: CustomEvent;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: CustomEventError })
  errors?: CustomEventError[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
