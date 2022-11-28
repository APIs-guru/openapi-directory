import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GuestAttributesValue } from "./guestattributesvalue";



// GuestAttributes
/** 
 * A guest attributes.
**/
export class GuestAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryPath" })
  queryPath?: string;

  @SpeakeasyMetadata({ data: "json, name=queryValue" })
  queryValue?: GuestAttributesValue;
}
