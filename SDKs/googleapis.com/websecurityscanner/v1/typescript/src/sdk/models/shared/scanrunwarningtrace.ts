import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScanRunWarningTraceCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    InsufficientCrawlResults = "INSUFFICIENT_CRAWL_RESULTS",
    TooManyCrawlResults = "TOO_MANY_CRAWL_RESULTS",
    TooManyFuzzTasks = "TOO_MANY_FUZZ_TASKS",
    BlockedByIap = "BLOCKED_BY_IAP",
    NoStartingUrlFoundForManagedScan = "NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN"
}


// ScanRunWarningTrace
/** 
 * Output only. Defines a warning trace message for ScanRun. Warning traces provide customers with useful information that helps make the scanning process more effective.
**/
export class ScanRunWarningTrace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ScanRunWarningTraceCodeEnum;
}
