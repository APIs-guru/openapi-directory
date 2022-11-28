import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1AnnotateImageResponse } from "./googlecloudvisionv1p2beta1annotateimageresponse";



// GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse
/** 
 * Response to a batch image annotation request.
**/
export class GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: GoogleCloudVisionV1p2beta1AnnotateImageResponse })
  responses?: GoogleCloudVisionV1p2beta1AnnotateImageResponse[];
}
