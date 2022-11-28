import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
export declare enum ClusterResponseStatusEnum {
    WaitingInQueue = "waiting_in_queue",
    Processing = "processing",
    Finished = "finished"
}
export declare class ClusterResponse extends SpeakeasyBase {
    clusters?: Cluster[];
    copyrights?: string[];
    processingTime?: number;
    status?: ClusterResponseStatusEnum;
    waitingTimeInQueue?: number;
}
