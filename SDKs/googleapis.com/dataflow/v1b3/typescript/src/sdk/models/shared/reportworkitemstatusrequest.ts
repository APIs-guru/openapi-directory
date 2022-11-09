import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkItemStatus } from "./workitemstatus";


// ReportWorkItemStatusRequest
/** 
 * Request to report the status of WorkItems.
**/
export class ReportWorkItemStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentWorkerTime" })
  currentWorkerTime?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=unifiedWorkerRequest" })
  unifiedWorkerRequest?: Map<string, any>;

  @Metadata({ data: "json, name=workItemStatuses", elemType: shared.WorkItemStatus })
  workItemStatuses?: WorkItemStatus[];

  @Metadata({ data: "json, name=workerId" })
  workerId?: string;
}
