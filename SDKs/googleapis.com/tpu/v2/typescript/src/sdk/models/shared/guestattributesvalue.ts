import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GuestAttributesEntry } from "./guestattributesentry";



// GuestAttributesValue
/** 
 * Array of guest attribute namespace/key/value tuples.
**/
export class GuestAttributesValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GuestAttributesEntry })
  items?: GuestAttributesEntry[];
}
