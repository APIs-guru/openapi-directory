import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1AnnotateImageRequest } from "./googlecloudvisionv1p2beta1annotateimagerequest";



// GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest
/** 
 * Multiple image annotation requests are batched into a single service call.
**/
export class GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleCloudVisionV1p2beta1AnnotateImageRequest })
  requests?: GoogleCloudVisionV1p2beta1AnnotateImageRequest[];
}
