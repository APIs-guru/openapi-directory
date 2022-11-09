import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogEntry } from "./logentry";
import { SuppressionInfo } from "./suppressioninfo";


// TailLogEntriesResponse
/** 
 * Result returned from TailLogEntries.
**/
export class TailLogEntriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.LogEntry })
  entries?: LogEntry[];

  @Metadata({ data: "json, name=suppressionInfo", elemType: shared.SuppressionInfo })
  suppressionInfo?: SuppressionInfo[];
}
