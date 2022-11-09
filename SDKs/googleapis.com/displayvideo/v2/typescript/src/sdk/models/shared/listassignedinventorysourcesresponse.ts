import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignedInventorySource } from "./assignedinventorysource";


// ListAssignedInventorySourcesResponse
/** 
 * Response message for AssignedInventorySourceService.ListAssignedInventorySources.
**/
export class ListAssignedInventorySourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignedInventorySources", elemType: shared.AssignedInventorySource })
  assignedInventorySources?: AssignedInventorySource[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
