import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1ColorInfo } from "./googlecloudvisionv1p2beta1colorinfo";



// GoogleCloudVisionV1p2beta1DominantColorsAnnotation
/** 
 * Set of dominant colors and their corresponding scores.
**/
export class GoogleCloudVisionV1p2beta1DominantColorsAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colors", elemType: GoogleCloudVisionV1p2beta1ColorInfo })
  colors?: GoogleCloudVisionV1p2beta1ColorInfo[];
}
