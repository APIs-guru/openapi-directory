import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";
import { InputConfig } from "./inputconfig";
import { AnnotateImageResponse } from "./annotateimageresponse";


// AnnotateFileResponse
/** 
 * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
**/
export class AnnotateFileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: InputConfig;

  @Metadata({ data: "json, name=responses", elemType: shared.AnnotateImageResponse })
  responses?: AnnotateImageResponse[];

  @Metadata({ data: "json, name=totalPages" })
  totalPages?: number;
}
