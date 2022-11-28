import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1AnnotateImageResponse } from "./googlecloudvisionv1p1beta1annotateimageresponse";



// GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse
/** 
 * Response to a batch image annotation request.
**/
export class GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: GoogleCloudVisionV1p1beta1AnnotateImageResponse })
  responses?: GoogleCloudVisionV1p1beta1AnnotateImageResponse[];
}
