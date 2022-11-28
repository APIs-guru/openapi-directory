import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemInput } from "./item";
import { Location } from "./location";



// CreateItemRequestInput
/** 
 * Create an item in a form.
**/
export class CreateItemRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: ItemInput;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;
}
