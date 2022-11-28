import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportContext } from "./importcontext";



// InstancesImportRequest
/** 
 * Database instance import request.
**/
export class InstancesImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=importContext" })
  importContext?: ImportContext;
}
