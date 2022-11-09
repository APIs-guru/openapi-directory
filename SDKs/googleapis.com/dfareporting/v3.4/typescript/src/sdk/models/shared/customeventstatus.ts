import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomEvent } from "./customevent";
import { CustomEventError } from "./customeventerror";


// CustomEventStatus
/** 
 * The original custom event that was inserted and whether there were any errors.
**/
export class CustomEventStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=customEvent" })
  customEvent?: CustomEvent;

  @Metadata({ data: "json, name=errors", elemType: shared.CustomEventError })
  errors?: CustomEventError[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
