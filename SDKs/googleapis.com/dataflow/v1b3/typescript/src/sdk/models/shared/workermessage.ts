import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=time" })
  time?: string;

  @Metadata({ data: "json, name=workerHealthReport" })
  workerHealthReport?: WorkerHealthReport;

  @Metadata({ data: "json, name=workerLifecycleEvent" })
  workerLifecycleEvent?: WorkerLifecycleEvent;

  @Metadata({ data: "json, name=workerMessageCode" })
  workerMessageCode?: WorkerMessageCode;

  @Metadata({ data: "json, name=workerMetrics" })
  workerMetrics?: ResourceUtilizationReport;

  @Metadata({ data: "json, name=workerShutdownNotice" })
  workerShutdownNotice?: WorkerShutdownNotice;
}
