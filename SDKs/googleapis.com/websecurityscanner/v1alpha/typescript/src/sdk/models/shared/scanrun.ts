import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScanRunExecutionStateEnum {
    ExecutionStateUnspecified = "EXECUTION_STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Scanning = "SCANNING",
    Finished = "FINISHED"
}

export enum ScanRunResultStateEnum {
    ResultStateUnspecified = "RESULT_STATE_UNSPECIFIED",
    Success = "SUCCESS",
    Error = "ERROR",
    Killed = "KILLED"
}


// ScanRun
/** 
 * A ScanRun is a output-only resource representing an actual run of the scan.
**/
export class ScanRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=executionState" })
  executionState?: ScanRunExecutionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=hasVulnerabilities" })
  hasVulnerabilities?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=progressPercent" })
  progressPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=resultState" })
  resultState?: ScanRunResultStateEnum;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=urlsCrawledCount" })
  urlsCrawledCount?: string;

  @SpeakeasyMetadata({ data: "json, name=urlsTestedCount" })
  urlsTestedCount?: string;
}
