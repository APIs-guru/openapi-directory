import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Header
/** 
 * Describes a HTTP Header.
**/
export class Header extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
