import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Item } from "./item";
import { Location } from "./location";


// CreateItemRequest
/** 
 * Create an item in a form.
**/
export class CreateItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: Item;

  @Metadata({ data: "json, name=location" })
  location?: Location;
}
