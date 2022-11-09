import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DominantColorsAnnotation } from "./dominantcolorsannotation";


// ImageProperties
/** 
 * Stores image properties, such as dominant colors.
**/
export class ImageProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=dominantColors" })
  dominantColors?: DominantColorsAnnotation;
}
