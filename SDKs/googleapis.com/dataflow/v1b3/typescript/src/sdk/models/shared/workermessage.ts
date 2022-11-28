import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerHealthReport } from "./workerhealthreport";
import { WorkerLifecycleEvent } from "./workerlifecycleevent";
import { WorkerMessageCode } from "./workermessagecode";
import { ResourceUtilizationReport } from "./resourceutilizationreport";
import { WorkerShutdownNotice } from "./workershutdownnotice";



// WorkerMessage
/** 
 * WorkerMessage provides information to the backend about a worker.
**/
export class WorkerMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=workerHealthReport" })
  workerHealthReport?: WorkerHealthReport;

  @SpeakeasyMetadata({ data: "json, name=workerLifecycleEvent" })
  workerLifecycleEvent?: WorkerLifecycleEvent;

  @SpeakeasyMetadata({ data: "json, name=workerMessageCode" })
  workerMessageCode?: WorkerMessageCode;

  @SpeakeasyMetadata({ data: "json, name=workerMetrics" })
  workerMetrics?: ResourceUtilizationReport;

  @SpeakeasyMetadata({ data: "json, name=workerShutdownNotice" })
  workerShutdownNotice?: WorkerShutdownNotice;
}
