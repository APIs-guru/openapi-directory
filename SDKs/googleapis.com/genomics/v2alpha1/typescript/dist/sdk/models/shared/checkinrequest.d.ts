import { SpeakeasyBase } from "../../../internal/utils";
import { TimestampedEvent } from "./timestampedevent";
import { Status } from "./status";
import { WorkerStatus } from "./workerstatus";
/**
 * The parameters to the CheckIn method.
**/
export declare class CheckInRequest extends SpeakeasyBase {
    deadlineExpired?: Map<string, any>;
    event?: Map<string, any>;
    events?: TimestampedEvent[];
    result?: Status;
    sosReport?: string;
    workerStatus?: WorkerStatus;
}
