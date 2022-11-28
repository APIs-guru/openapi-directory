import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnnotateImageRequest } from "./annotateimagerequest";



// BatchAnnotateImagesRequest
/** 
 * Multiple image annotation requests are batched into a single service call.
**/
export class BatchAnnotateImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=requests", elemType: AnnotateImageRequest })
  requests?: AnnotateImageRequest[];
}
