import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Header } from "./header";


// HeaderOverride
/** 
 * Wraps the Header object.
**/
export class HeaderOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: Header;
}
