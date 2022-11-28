import { SpeakeasyBase } from "../../../internal/utils";
import { LogEntryInput } from "./logentry";
import { MonitoredResource } from "./monitoredresource";
/**
 * The parameters to WriteLogEntries.
**/
export declare class WriteLogEntriesRequestInput extends SpeakeasyBase {
    dryRun?: boolean;
    entries?: LogEntryInput[];
    labels?: Map<string, string>;
    logName?: string;
    partialSuccess?: boolean;
    resource?: MonitoredResource;
}
