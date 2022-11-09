import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkerHealthReportResponse } from "./workerhealthreportresponse";


// WorkerMessageResponse
/** 
 * A worker_message response allows the server to pass information to the sender.
**/
export class WorkerMessageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=workerHealthReportResponse" })
  workerHealthReportResponse?: WorkerHealthReportResponse;

  @Metadata({ data: "json, name=workerMetricsResponse" })
  workerMetricsResponse?: Map<string, any>;

  @Metadata({ data: "json, name=workerShutdownNoticeResponse" })
  workerShutdownNoticeResponse?: Map<string, any>;
}
