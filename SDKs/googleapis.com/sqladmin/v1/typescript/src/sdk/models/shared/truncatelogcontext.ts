import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TruncateLogContext
/** 
 * Database Instance truncate log context.
**/
export class TruncateLogContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=logType" })
  logType?: string;
}
