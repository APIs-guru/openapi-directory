import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SendAs } from "./sendas";



// ListSendAsResponse
/** 
 * Response for the ListSendAs method.
**/
export class ListSendAsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sendAs", elemType: SendAs })
  sendAs?: SendAs[];
}
