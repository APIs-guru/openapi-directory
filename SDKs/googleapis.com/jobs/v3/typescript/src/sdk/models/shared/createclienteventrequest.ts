import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientEvent } from "./clientevent";



// CreateClientEventRequest
/** 
 * The report event request.
**/
export class CreateClientEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientEvent" })
  clientEvent?: ClientEvent;
}
