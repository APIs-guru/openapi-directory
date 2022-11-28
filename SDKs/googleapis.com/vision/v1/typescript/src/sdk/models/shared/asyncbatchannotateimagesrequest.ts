import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputConfig } from "./outputconfig";
import { AnnotateImageRequest } from "./annotateimagerequest";



// AsyncBatchAnnotateImagesRequest
/** 
 * Request for async image annotation for a list of images.
**/
export class AsyncBatchAnnotateImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=requests", elemType: AnnotateImageRequest })
  requests?: AnnotateImageRequest[];
}
