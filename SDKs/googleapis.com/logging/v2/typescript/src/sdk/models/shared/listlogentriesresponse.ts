import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogEntry } from "./logentry";



// ListLogEntriesResponse
/** 
 * Result returned from ListLogEntries.
**/
export class ListLogEntriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: LogEntry })
  entries?: LogEntry[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
