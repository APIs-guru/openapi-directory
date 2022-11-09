import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DebugOptions } from "./debugoptions";


// StartUploadItemRequest
/** 
 * Start upload file request.
**/
export class StartUploadItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorName" })
  connectorName?: string;

  @Metadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;
}
