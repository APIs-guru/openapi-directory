import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnnotateImageResponse } from "./annotateimageresponse";



// BatchAnnotateImagesResponse
/** 
 * Response to a batch image annotation request.
**/
export class BatchAnnotateImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: AnnotateImageResponse })
  responses?: AnnotateImageResponse[];
}
