import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkerShutdownNotice
/** 
 * Shutdown notification from workers. This is to be sent by the shutdown script of the worker VM so that the backend knows that the VM is being shut down.
**/
export class WorkerShutdownNotice extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
