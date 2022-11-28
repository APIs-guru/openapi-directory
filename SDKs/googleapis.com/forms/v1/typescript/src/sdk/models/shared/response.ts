import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateItemResponse } from "./createitemresponse";



// Response
/** 
 * A single response from an update.
**/
export class Response extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createItem" })
  createItem?: CreateItemResponse;
}
