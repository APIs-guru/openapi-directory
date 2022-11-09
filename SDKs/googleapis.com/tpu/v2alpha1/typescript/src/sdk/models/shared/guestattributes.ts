import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GuestAttributesValue } from "./guestattributesvalue";


// GuestAttributes
/** 
 * A guest attributes.
**/
export class GuestAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryPath" })
  queryPath?: string;

  @Metadata({ data: "json, name=queryValue" })
  queryValue?: GuestAttributesValue;
}
