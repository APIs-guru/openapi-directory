import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1OutputConfig } from "./googlecloudvisionv1p2beta1outputconfig";
import { GoogleCloudVisionV1p2beta1AnnotateImageRequest } from "./googlecloudvisionv1p2beta1annotateimagerequest";



// GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest
/** 
 * Request for async image annotation for a list of images.
**/
export class GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: GoogleCloudVisionV1p2beta1OutputConfig;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleCloudVisionV1p2beta1AnnotateImageRequest })
  requests?: GoogleCloudVisionV1p2beta1AnnotateImageRequest[];
}
