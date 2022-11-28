import { SpeakeasyBase } from "../../../internal/utils";
import { LogEntry } from "./logentry";
/**
 * Result returned from ListLogEntries.
**/
export declare class ListLogEntriesResponse extends SpeakeasyBase {
    entries?: LogEntry[];
    nextPageToken?: string;
}
