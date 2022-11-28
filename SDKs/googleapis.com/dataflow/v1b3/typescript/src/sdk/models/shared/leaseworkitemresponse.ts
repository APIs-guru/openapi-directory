import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkItem } from "./workitem";



// LeaseWorkItemResponse
/** 
 * Response to a request to lease WorkItems.
**/
export class LeaseWorkItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unifiedWorkerResponse" })
  unifiedWorkerResponse?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=workItems", elemType: WorkItem })
  workItems?: WorkItem[];
}
