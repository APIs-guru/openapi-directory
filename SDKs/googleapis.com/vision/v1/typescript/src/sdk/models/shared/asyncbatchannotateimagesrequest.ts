import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OutputConfig } from "./outputconfig";
import { AnnotateImageRequest } from "./annotateimagerequest";


// AsyncBatchAnnotateImagesRequest
/** 
 * Request for async image annotation for a list of images.
**/
export class AsyncBatchAnnotateImagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=requests", elemType: shared.AnnotateImageRequest })
  requests?: AnnotateImageRequest[];
}
