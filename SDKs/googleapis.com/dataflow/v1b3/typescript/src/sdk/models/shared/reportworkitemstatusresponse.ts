import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkItemServiceState } from "./workitemservicestate";


// ReportWorkItemStatusResponse
/** 
 * Response from a request to report the status of WorkItems.
**/
export class ReportWorkItemStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=unifiedWorkerResponse" })
  unifiedWorkerResponse?: Map<string, any>;

  @Metadata({ data: "json, name=workItemServiceStates", elemType: shared.WorkItemServiceState })
  workItemServiceStates?: WorkItemServiceState[];
}
