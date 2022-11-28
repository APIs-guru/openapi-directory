import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemInput } from "./item";
import { Location } from "./location";



// UpdateItemRequestInput
/** 
 * Update an item in a form.
**/
export class UpdateItemRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: ItemInput;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
