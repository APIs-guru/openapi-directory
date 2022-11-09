import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ScanRunExecutionStateEnum {
    ExecutionStateUnspecified = "EXECUTION_STATE_UNSPECIFIED"
,    Queued = "QUEUED"
,    Scanning = "SCANNING"
,    Finished = "FINISHED"
}

export enum ScanRunResultStateEnum {
    ResultStateUnspecified = "RESULT_STATE_UNSPECIFIED"
,    Success = "SUCCESS"
,    Error = "ERROR"
,    Killed = "KILLED"
}


// ScanRun
/** 
 * A ScanRun is a output-only resource representing an actual run of the scan.
**/
export class ScanRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=executionState" })
  executionState?: ScanRunExecutionStateEnum;

  @Metadata({ data: "json, name=hasVulnerabilities" })
  hasVulnerabilities?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=progressPercent" })
  progressPercent?: number;

  @Metadata({ data: "json, name=resultState" })
  resultState?: ScanRunResultStateEnum;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=urlsCrawledCount" })
  urlsCrawledCount?: string;

  @Metadata({ data: "json, name=urlsTestedCount" })
  urlsTestedCount?: string;
}
