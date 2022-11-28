import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerPool } from "./workerpool";
/**
 * Response containing existing `WorkerPools`.
**/
export declare class ListWorkerPoolsResponse extends SpeakeasyBase {
    workerPools?: WorkerPool[];
}
