import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1AnnotateImageResponse } from "./googlecloudvisionv1p1beta1annotateimageresponse";


// GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse
/** 
 * Response to a batch image annotation request.
**/
export class GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.GoogleCloudVisionV1p1beta1AnnotateImageResponse })
  responses?: GoogleCloudVisionV1p1beta1AnnotateImageResponse[];
}
