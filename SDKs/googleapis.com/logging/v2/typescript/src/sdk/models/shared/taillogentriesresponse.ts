import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogEntry } from "./logentry";
import { SuppressionInfo } from "./suppressioninfo";



// TailLogEntriesResponse
/** 
 * Result returned from TailLogEntries.
**/
export class TailLogEntriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: LogEntry })
  entries?: LogEntry[];

  @SpeakeasyMetadata({ data: "json, name=suppressionInfo", elemType: SuppressionInfo })
  suppressionInfo?: SuppressionInfo[];
}
