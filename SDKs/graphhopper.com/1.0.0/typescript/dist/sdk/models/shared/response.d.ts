import { SpeakeasyBase } from "../../../internal/utils";
import { Solution } from "./solution";
export declare enum ResponseStatusEnum {
    WaitingInQueue = "waiting_in_queue",
    Processing = "processing",
    Finished = "finished"
}
export declare class Response extends SpeakeasyBase {
    copyrights?: string[];
    processingTime?: number;
    solution?: Solution;
    status?: ResponseStatusEnum;
    waitingTimeInQueue?: number;
}
