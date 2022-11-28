import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// DeleteItemRequest
/** 
 * Delete an item in a form.
**/
export class DeleteItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;
}
