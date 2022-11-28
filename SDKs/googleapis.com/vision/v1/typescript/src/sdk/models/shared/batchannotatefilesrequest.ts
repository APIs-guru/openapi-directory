import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnnotateFileRequest } from "./annotatefilerequest";



// BatchAnnotateFilesRequest
/** 
 * A list of requests to annotate files using the BatchAnnotateFiles API.
**/
export class BatchAnnotateFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=requests", elemType: AnnotateFileRequest })
  requests?: AnnotateFileRequest[];
}
