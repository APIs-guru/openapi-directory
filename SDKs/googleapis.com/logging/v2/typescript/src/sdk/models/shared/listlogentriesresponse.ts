import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogEntry } from "./logentry";


// ListLogEntriesResponse
/** 
 * Result returned from ListLogEntries.
**/
export class ListLogEntriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.LogEntry })
  entries?: LogEntry[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
