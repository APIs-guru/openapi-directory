import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogEntryInput } from "./logentry";
import { MonitoredResource } from "./monitoredresource";



// WriteLogEntriesRequestInput
/** 
 * The parameters to WriteLogEntries.
**/
export class WriteLogEntriesRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=entries", elemType: LogEntryInput })
  entries?: LogEntryInput[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=logName" })
  logName?: string;

  @SpeakeasyMetadata({ data: "json, name=partialSuccess" })
  partialSuccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: MonitoredResource;
}
