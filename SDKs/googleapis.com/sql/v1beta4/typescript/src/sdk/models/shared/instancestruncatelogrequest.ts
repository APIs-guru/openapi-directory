import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TruncateLogContext } from "./truncatelogcontext";



// InstancesTruncateLogRequest
/** 
 * Instance truncate log request.
**/
export class InstancesTruncateLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=truncateLogContext" })
  truncateLogContext?: TruncateLogContext;
}
