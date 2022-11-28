import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1JobServiceEnum {
    ServiceUnspecified = "SERVICE_UNSPECIFIED",
    Dataproc = "DATAPROC"
}
export declare enum GoogleCloudDataplexV1JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Aborted = "ABORTED"
}
/**
 * A job represents an instance of a task.
**/
export declare class GoogleCloudDataplexV1Job extends SpeakeasyBase {
    endTime?: string;
    message?: string;
    name?: string;
    retryCount?: number;
    service?: GoogleCloudDataplexV1JobServiceEnum;
    serviceJob?: string;
    startTime?: string;
    state?: GoogleCloudDataplexV1JobStateEnum;
    uid?: string;
}
