import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Voice } from "./voice";



// ListVoicesResponse
/** 
 * The message returned to the client by the `ListVoices` method.
**/
export class ListVoicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=voices", elemType: Voice })
  voices?: Voice[];
}
