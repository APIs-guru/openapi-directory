import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// MoveItemRequest
/** 
 * Move an item in a form.
**/
export class MoveItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newLocation" })
  newLocation?: Location;

  @SpeakeasyMetadata({ data: "json, name=originalLocation" })
  originalLocation?: Location;
}
