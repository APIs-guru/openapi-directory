import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerHealthReportResponse } from "./workerhealthreportresponse";



// WorkerMessageResponse
/** 
 * A worker_message response allows the server to pass information to the sender.
**/
export class WorkerMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workerHealthReportResponse" })
  workerHealthReportResponse?: WorkerHealthReportResponse;

  @SpeakeasyMetadata({ data: "json, name=workerMetricsResponse" })
  workerMetricsResponse?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=workerShutdownNoticeResponse" })
  workerShutdownNoticeResponse?: Map<string, any>;
}
