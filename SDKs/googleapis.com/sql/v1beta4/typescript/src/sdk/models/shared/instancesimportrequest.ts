import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportContext } from "./importcontext";


// InstancesImportRequest
/** 
 * Database instance import request.
**/
export class InstancesImportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=importContext" })
  importContext?: ImportContext;
}
