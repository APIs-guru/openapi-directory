import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";



// ColorInfo
/** 
 * Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
**/
export class ColorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: Color;

  @SpeakeasyMetadata({ data: "json, name=pixelFraction" })
  pixelFraction?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
