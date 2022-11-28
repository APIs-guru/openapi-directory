import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Header } from "./header";



// HeaderOverride
/** 
 * Wraps the Header object.
**/
export class HeaderOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: Header;
}
