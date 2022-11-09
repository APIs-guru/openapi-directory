import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OutputConfig } from "./outputconfig";


// ExportInstanceRequest
/** 
 * Request for Export.
**/
export class ExportInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;
}
