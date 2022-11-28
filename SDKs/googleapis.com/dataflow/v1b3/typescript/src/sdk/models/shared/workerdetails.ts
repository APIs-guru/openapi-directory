import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkItemDetails } from "./workitemdetails";



// WorkerDetails
/** 
 * Information about a worker
**/
export class WorkerDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workItems", elemType: WorkItemDetails })
  workItems?: WorkItemDetails[];

  @SpeakeasyMetadata({ data: "json, name=workerName" })
  workerName?: string;
}
