import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AsyncAnnotateFileRequest } from "./asyncannotatefilerequest";


// AsyncBatchAnnotateFilesRequest
/** 
 * Multiple async file annotation requests are batched into a single service call.
**/
export class AsyncBatchAnnotateFilesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=requests", elemType: shared.AsyncAnnotateFileRequest })
  requests?: AsyncAnnotateFileRequest[];
}
