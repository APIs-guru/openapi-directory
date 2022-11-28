import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";



// GoogleCloudVisionV1p2beta1ColorInfo
/** 
 * Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
**/
export class GoogleCloudVisionV1p2beta1ColorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: Color;

  @SpeakeasyMetadata({ data: "json, name=pixelFraction" })
  pixelFraction?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
