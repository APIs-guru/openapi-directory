import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnnotateFileResponse } from "./annotatefileresponse";



// BatchAnnotateFilesResponse
/** 
 * A list of file annotation responses.
**/
export class BatchAnnotateFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: AnnotateFileResponse })
  responses?: AnnotateFileResponse[];
}
