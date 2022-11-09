import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVisionV1p1beta1DominantColorsAnnotation } from "./googlecloudvisionv1p1beta1dominantcolorsannotation";


// GoogleCloudVisionV1p1beta1ImageProperties
/** 
 * Stores image properties, such as dominant colors.
**/
export class GoogleCloudVisionV1p1beta1ImageProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=dominantColors" })
  dominantColors?: GoogleCloudVisionV1p1beta1DominantColorsAnnotation;
}
