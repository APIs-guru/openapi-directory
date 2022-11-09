import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LogEntry } from "./logentry";
import { MonitoredResource } from "./monitoredresource";
/**
 * The parameters to WriteLogEntries.
**/
export declare class WriteLogEntriesRequest extends SpeakeasyBase {
    dryRun?: boolean;
    entries?: LogEntry[];
    labels?: Map<string, string>;
    logName?: string;
    partialSuccess?: boolean;
    resource?: MonitoredResource;
}
