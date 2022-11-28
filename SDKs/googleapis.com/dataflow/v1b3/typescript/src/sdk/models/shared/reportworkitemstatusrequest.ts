import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkItemStatus } from "./workitemstatus";



// ReportWorkItemStatusRequest
/** 
 * Request to report the status of WorkItems.
**/
export class ReportWorkItemStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentWorkerTime" })
  currentWorkerTime?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=unifiedWorkerRequest" })
  unifiedWorkerRequest?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=workItemStatuses", elemType: WorkItemStatus })
  workItemStatuses?: WorkItemStatus[];

  @SpeakeasyMetadata({ data: "json, name=workerId" })
  workerId?: string;
}
