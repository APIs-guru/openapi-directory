import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RgbColor } from "./rgbcolor";


// Color
/** 
 * A solid color.
**/
export class Color extends SpeakeasyBase {
  @Metadata({ data: "json, name=rgbColor" })
  rgbColor?: RgbColor;
}
