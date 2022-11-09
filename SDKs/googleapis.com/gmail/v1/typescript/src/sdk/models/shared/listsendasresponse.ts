import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SendAs } from "./sendas";


// ListSendAsResponse
/** 
 * Response for the ListSendAs method.
**/
export class ListSendAsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=sendAs", elemType: shared.SendAs })
  sendAs?: SendAs[];
}
