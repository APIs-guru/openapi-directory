import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TruncateLogContext
/** 
 * Database Instance truncate log context.
**/
export class TruncateLogContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=logType" })
  logType?: string;
}
