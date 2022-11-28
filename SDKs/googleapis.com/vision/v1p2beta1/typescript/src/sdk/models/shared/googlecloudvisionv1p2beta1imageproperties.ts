import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1DominantColorsAnnotation } from "./googlecloudvisionv1p2beta1dominantcolorsannotation";



// GoogleCloudVisionV1p2beta1ImageProperties
/** 
 * Stores image properties, such as dominant colors.
**/
export class GoogleCloudVisionV1p2beta1ImageProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dominantColors" })
  dominantColors?: GoogleCloudVisionV1p2beta1DominantColorsAnnotation;
}
