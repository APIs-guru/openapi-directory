import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LogSplit
/** 
 * Additional information used to correlate multiple log entries. Used when a single LogEntry would exceed the Google Cloud Logging size limit and is split across multiple log entries.
**/
export class LogSplit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=totalSplits" })
  totalSplits?: number;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}
