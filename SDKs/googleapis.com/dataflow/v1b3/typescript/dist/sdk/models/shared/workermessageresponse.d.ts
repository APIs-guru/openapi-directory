import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerHealthReportResponse } from "./workerhealthreportresponse";
/**
 * A worker_message response allows the server to pass information to the sender.
**/
export declare class WorkerMessageResponse extends SpeakeasyBase {
    workerHealthReportResponse?: WorkerHealthReportResponse;
    workerMetricsResponse?: Map<string, any>;
    workerShutdownNoticeResponse?: Map<string, any>;
}
