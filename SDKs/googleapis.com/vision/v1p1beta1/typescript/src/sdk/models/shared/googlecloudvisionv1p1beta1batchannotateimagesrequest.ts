import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1AnnotateImageRequest } from "./googlecloudvisionv1p1beta1annotateimagerequest";


// GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest
/** 
 * Multiple image annotation requests are batched into a single service call.
**/
export class GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=requests", elemType: shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest })
  requests?: GoogleCloudVisionV1p1beta1AnnotateImageRequest[];
}
