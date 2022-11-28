import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { InputConfig } from "./inputconfig";
import { AnnotateImageResponse } from "./annotateimageresponse";



// AnnotateFileResponse
/** 
 * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
**/
export class AnnotateFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: InputConfig;

  @SpeakeasyMetadata({ data: "json, name=responses", elemType: AnnotateImageResponse })
  responses?: AnnotateImageResponse[];

  @SpeakeasyMetadata({ data: "json, name=totalPages" })
  totalPages?: number;
}
