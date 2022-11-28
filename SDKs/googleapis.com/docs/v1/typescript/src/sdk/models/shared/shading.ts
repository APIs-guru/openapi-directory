import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionalColor } from "./optionalcolor";



// Shading
/** 
 * The shading of a paragraph.
**/
export class Shading extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: OptionalColor;
}
