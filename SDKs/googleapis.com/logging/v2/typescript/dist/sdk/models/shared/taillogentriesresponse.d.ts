import { SpeakeasyBase } from "../../../internal/utils";
import { LogEntry } from "./logentry";
import { SuppressionInfo } from "./suppressioninfo";
/**
 * Result returned from TailLogEntries.
**/
export declare class TailLogEntriesResponse extends SpeakeasyBase {
    entries?: LogEntry[];
    suppressionInfo?: SuppressionInfo[];
}
