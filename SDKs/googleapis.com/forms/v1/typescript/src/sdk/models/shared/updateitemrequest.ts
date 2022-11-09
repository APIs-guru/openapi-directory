import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Item } from "./item";
import { Location } from "./location";


// UpdateItemRequest
/** 
 * Update an item in a form.
**/
export class UpdateItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: Item;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
