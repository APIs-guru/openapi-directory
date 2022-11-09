import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateItemResponse } from "./createitemresponse";


// Response
/** 
 * A single response from an update.
**/
export class Response extends SpeakeasyBase {
  @Metadata({ data: "json, name=createItem" })
  createItem?: CreateItemResponse;
}
