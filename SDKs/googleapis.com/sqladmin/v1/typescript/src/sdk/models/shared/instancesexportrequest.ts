import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportContext } from "./exportcontext";



// InstancesExportRequest
/** 
 * Database instance export request.
**/
export class InstancesExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportContext" })
  exportContext?: ExportContext;
}
