import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RgbColor } from "./rgbcolor";



// Color
/** 
 * A solid color.
**/
export class Color extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rgbColor" })
  rgbColor?: RgbColor;
}
