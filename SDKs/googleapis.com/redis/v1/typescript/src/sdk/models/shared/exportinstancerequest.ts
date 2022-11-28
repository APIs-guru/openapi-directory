import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputConfig } from "./outputconfig";



// ExportInstanceRequest
/** 
 * Request for Export.
**/
export class ExportInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;
}
