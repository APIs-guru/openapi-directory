import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnnotateImageResponse } from "./annotateimageresponse";


// BatchAnnotateImagesResponse
/** 
 * Response to a batch image annotation request.
**/
export class BatchAnnotateImagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.AnnotateImageResponse })
  responses?: AnnotateImageResponse[];
}
