import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional information used to correlate multiple log entries. Used when a single LogEntry would exceed the Google Cloud Logging size limit and is split across multiple log entries.
**/
export declare class LogSplit extends SpeakeasyBase {
    index?: number;
    totalSplits?: number;
    uid?: string;
}
