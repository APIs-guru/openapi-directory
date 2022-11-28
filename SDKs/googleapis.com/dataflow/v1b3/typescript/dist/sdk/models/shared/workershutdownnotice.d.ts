import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Shutdown notification from workers. This is to be sent by the shutdown script of the worker VM so that the backend knows that the VM is being shut down.
**/
export declare class WorkerShutdownNotice extends SpeakeasyBase {
    reason?: string;
}
