import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1OutputConfig } from "./googlecloudvisionv1p1beta1outputconfig";
import { GoogleCloudVisionV1p1beta1AnnotateImageRequest } from "./googlecloudvisionv1p1beta1annotateimagerequest";


// GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest
/** 
 * Request for async image annotation for a list of images.
**/
export class GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: GoogleCloudVisionV1p1beta1OutputConfig;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=requests", elemType: shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest })
  requests?: GoogleCloudVisionV1p1beta1AnnotateImageRequest[];
}
