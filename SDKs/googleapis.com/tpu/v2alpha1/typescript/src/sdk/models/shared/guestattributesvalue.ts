import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GuestAttributesEntry } from "./guestattributesentry";


// GuestAttributesValue
/** 
 * Array of guest attribute namespace/key/value tuples.
**/
export class GuestAttributesValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.GuestAttributesEntry })
  items?: GuestAttributesEntry[];
}
