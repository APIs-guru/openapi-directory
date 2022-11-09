import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";


// ColorInfo
/** 
 * Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
**/
export class ColorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: Color;

  @Metadata({ data: "json, name=pixelFraction" })
  pixelFraction?: number;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
