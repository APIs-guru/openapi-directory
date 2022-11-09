import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";
import { Location } from "./location";


// MoveItemRequest
/** 
 * Move an item in a form.
**/
export class MoveItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=newLocation" })
  newLocation?: Location;

  @Metadata({ data: "json, name=originalLocation" })
  originalLocation?: Location;
}
