import { SpeakeasyBase } from "../../../internal/utils";
import { ScanRunErrorTrace } from "./scanrunerrortrace";
import { ScanRunWarningTrace } from "./scanrunwarningtrace";
export declare enum ScanRunExecutionStateEnum {
    ExecutionStateUnspecified = "EXECUTION_STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Scanning = "SCANNING",
    Finished = "FINISHED"
}
export declare enum ScanRunResultStateEnum {
    ResultStateUnspecified = "RESULT_STATE_UNSPECIFIED",
    Success = "SUCCESS",
    Error = "ERROR",
    Killed = "KILLED"
}
/**
 * A ScanRun is a output-only resource representing an actual run of the scan. Next id: 12
**/
export declare class ScanRun extends SpeakeasyBase {
    endTime?: string;
    errorTrace?: ScanRunErrorTrace;
    executionState?: ScanRunExecutionStateEnum;
    hasVulnerabilities?: boolean;
    name?: string;
    progressPercent?: number;
    resultState?: ScanRunResultStateEnum;
    startTime?: string;
    urlsCrawledCount?: string;
    urlsTestedCount?: string;
    warningTraces?: ScanRunWarningTrace[];
}
