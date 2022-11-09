import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnnotateFileRequest } from "./annotatefilerequest";


// BatchAnnotateFilesRequest
/** 
 * A list of requests to annotate files using the BatchAnnotateFiles API.
**/
export class BatchAnnotateFilesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=requests", elemType: shared.AnnotateFileRequest })
  requests?: AnnotateFileRequest[];
}
