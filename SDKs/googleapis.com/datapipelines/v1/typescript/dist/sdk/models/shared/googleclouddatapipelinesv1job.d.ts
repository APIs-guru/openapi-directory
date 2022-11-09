import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1DataflowJobDetails } from "./googleclouddatapipelinesv1dataflowjobdetails";
import { GoogleRpcStatus } from "./googlerpcstatus";
export declare enum GoogleCloudDatapipelinesV1JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    StatePending = "STATE_PENDING",
    StateRunning = "STATE_RUNNING",
    StateDone = "STATE_DONE",
    StateFailed = "STATE_FAILED",
    StateCancelled = "STATE_CANCELLED"
}
/**
 * Definition of the job information maintained by the pipeline. Fields in this entity are retrieved from the executor API (e.g. Dataflow API).
**/
export declare class GoogleCloudDatapipelinesV1Job extends SpeakeasyBase {
    createTime?: string;
    dataflowJobDetails?: GoogleCloudDatapipelinesV1DataflowJobDetails;
    endTime?: string;
    id?: string;
    name?: string;
    state?: GoogleCloudDatapipelinesV1JobStateEnum;
    status?: GoogleRpcStatus;
}
