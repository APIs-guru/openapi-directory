import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnnotateImageRequest } from "./annotateimagerequest";


// BatchAnnotateImagesRequest
/** 
 * Multiple image annotation requests are batched into a single service call.
**/
export class BatchAnnotateImagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=requests", elemType: shared.AnnotateImageRequest })
  requests?: AnnotateImageRequest[];
}
