import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OptionalColor } from "./optionalcolor";


// Background
/** 
 * Represents the background of a document.
**/
export class Background extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: OptionalColor;
}
