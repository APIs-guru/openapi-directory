import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerHealthReport } from "./workerhealthreport";
import { WorkerLifecycleEvent } from "./workerlifecycleevent";
import { WorkerMessageCode } from "./workermessagecode";
import { ResourceUtilizationReport } from "./resourceutilizationreport";
import { WorkerShutdownNotice } from "./workershutdownnotice";
/**
 * WorkerMessage provides information to the backend about a worker.
**/
export declare class WorkerMessage extends SpeakeasyBase {
    labels?: Map<string, string>;
    time?: string;
    workerHealthReport?: WorkerHealthReport;
    workerLifecycleEvent?: WorkerLifecycleEvent;
    workerMessageCode?: WorkerMessageCode;
    workerMetrics?: ResourceUtilizationReport;
    workerShutdownNotice?: WorkerShutdownNotice;
}
