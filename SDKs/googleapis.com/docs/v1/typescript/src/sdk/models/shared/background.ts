import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionalColor } from "./optionalcolor";



// Background
/** 
 * Represents the background of a document.
**/
export class Background extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: OptionalColor;
}
