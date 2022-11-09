import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogEntry } from "./logentry";
import { MonitoredResource } from "./monitoredresource";


// WriteLogEntriesRequest
/** 
 * The parameters to WriteLogEntries.
**/
export class WriteLogEntriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=entries", elemType: shared.LogEntry })
  entries?: LogEntry[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=logName" })
  logName?: string;

  @Metadata({ data: "json, name=partialSuccess" })
  partialSuccess?: boolean;

  @Metadata({ data: "json, name=resource" })
  resource?: MonitoredResource;
}
