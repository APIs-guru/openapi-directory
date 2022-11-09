import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientEvent } from "./clientevent";


// CreateClientEventRequest
/** 
 * The report event request.
**/
export class CreateClientEventRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientEvent" })
  clientEvent?: ClientEvent;
}
