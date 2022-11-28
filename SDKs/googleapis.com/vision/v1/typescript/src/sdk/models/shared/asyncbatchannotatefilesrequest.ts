import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AsyncAnnotateFileRequest } from "./asyncannotatefilerequest";



// AsyncBatchAnnotateFilesRequest
/** 
 * Multiple async file annotation requests are batched into a single service call.
**/
export class AsyncBatchAnnotateFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=requests", elemType: AsyncAnnotateFileRequest })
  requests?: AsyncAnnotateFileRequest[];
}
