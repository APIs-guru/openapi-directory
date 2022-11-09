import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Voice } from "./voice";


// ListVoicesResponse
/** 
 * The message returned to the client by the `ListVoices` method.
**/
export class ListVoicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=voices", elemType: shared.Voice })
  voices?: Voice[];
}
