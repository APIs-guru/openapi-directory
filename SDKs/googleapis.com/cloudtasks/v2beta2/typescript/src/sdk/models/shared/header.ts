import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Header
/** 
 * Defines a header message. A header can have a key and a value.
**/
export class Header extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
