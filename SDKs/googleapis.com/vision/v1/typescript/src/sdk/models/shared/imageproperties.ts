import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DominantColorsAnnotation } from "./dominantcolorsannotation";



// ImageProperties
/** 
 * Stores image properties, such as dominant colors.
**/
export class ImageProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dominantColors" })
  dominantColors?: DominantColorsAnnotation;
}
