import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkItemDetails } from "./workitemdetails";


// WorkerDetails
/** 
 * Information about a worker
**/
export class WorkerDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=workItems", elemType: shared.WorkItemDetails })
  workItems?: WorkItemDetails[];

  @Metadata({ data: "json, name=workerName" })
  workerName?: string;
}
