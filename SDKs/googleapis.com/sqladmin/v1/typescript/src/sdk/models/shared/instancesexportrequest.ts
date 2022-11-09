import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportContext } from "./exportcontext";


// InstancesExportRequest
/** 
 * Database instance export request.
**/
export class InstancesExportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportContext" })
  exportContext?: ExportContext;
}
