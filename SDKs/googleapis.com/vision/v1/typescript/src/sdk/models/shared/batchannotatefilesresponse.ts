import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnnotateFileResponse } from "./annotatefileresponse";


// BatchAnnotateFilesResponse
/** 
 * A list of file annotation responses.
**/
export class BatchAnnotateFilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.AnnotateFileResponse })
  responses?: AnnotateFileResponse[];
}
