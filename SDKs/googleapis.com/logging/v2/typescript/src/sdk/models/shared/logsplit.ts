import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LogSplit
/** 
 * Additional information used to correlate multiple log entries. Used when a single LogEntry would exceed the Google Cloud Logging size limit and is split across multiple log entries.
**/
export class LogSplit extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=totalSplits" })
  totalSplits?: number;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
