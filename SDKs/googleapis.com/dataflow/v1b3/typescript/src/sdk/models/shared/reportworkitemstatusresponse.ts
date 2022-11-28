import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkItemServiceState } from "./workitemservicestate";



// ReportWorkItemStatusResponse
/** 
 * Response from a request to report the status of WorkItems.
**/
export class ReportWorkItemStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unifiedWorkerResponse" })
  unifiedWorkerResponse?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=workItemServiceStates", elemType: WorkItemServiceState })
  workItemServiceStates?: WorkItemServiceState[];
}
