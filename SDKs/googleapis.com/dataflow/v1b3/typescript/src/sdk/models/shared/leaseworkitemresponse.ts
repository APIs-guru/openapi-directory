import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkItem } from "./workitem";


// LeaseWorkItemResponse
/** 
 * Response to a request to lease WorkItems.
**/
export class LeaseWorkItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=unifiedWorkerResponse" })
  unifiedWorkerResponse?: Map<string, any>;

  @Metadata({ data: "json, name=workItems", elemType: shared.WorkItem })
  workItems?: WorkItem[];
}
