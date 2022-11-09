import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TruncateLogContext } from "./truncatelogcontext";


// InstancesTruncateLogRequest
/** 
 * Instance truncate log request.
**/
export class InstancesTruncateLogRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=truncateLogContext" })
  truncateLogContext?: TruncateLogContext;
}
