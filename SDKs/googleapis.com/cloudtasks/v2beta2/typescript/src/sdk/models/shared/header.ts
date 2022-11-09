import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Header
/** 
 * Defines a header message. A header can have a key and a value.
**/
export class Header extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
