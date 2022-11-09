import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// DeleteItemRequest
/** 
 * Delete an item in a form.
**/
export class DeleteItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: Location;
}
