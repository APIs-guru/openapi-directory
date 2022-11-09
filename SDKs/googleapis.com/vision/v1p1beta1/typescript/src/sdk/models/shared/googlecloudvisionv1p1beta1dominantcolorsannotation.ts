import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1ColorInfo } from "./googlecloudvisionv1p1beta1colorinfo";


// GoogleCloudVisionV1p1beta1DominantColorsAnnotation
/** 
 * Set of dominant colors and their corresponding scores.
**/
export class GoogleCloudVisionV1p1beta1DominantColorsAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=colors", elemType: shared.GoogleCloudVisionV1p1beta1ColorInfo })
  colors?: GoogleCloudVisionV1p1beta1ColorInfo[];
}
