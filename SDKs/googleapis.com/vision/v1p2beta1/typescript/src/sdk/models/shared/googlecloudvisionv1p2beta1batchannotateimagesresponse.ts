import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1AnnotateImageResponse } from "./googlecloudvisionv1p2beta1annotateimageresponse";


// GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse
/** 
 * Response to a batch image annotation request.
**/
export class GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.GoogleCloudVisionV1p2beta1AnnotateImageResponse })
  responses?: GoogleCloudVisionV1p2beta1AnnotateImageResponse[];
}
