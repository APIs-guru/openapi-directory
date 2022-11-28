import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedInventorySource } from "./assignedinventorysource";



// ListAssignedInventorySourcesResponse
/** 
 * Response message for AssignedInventorySourceService.ListAssignedInventorySources.
**/
export class ListAssignedInventorySourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedInventorySources", elemType: AssignedInventorySource })
  assignedInventorySources?: AssignedInventorySource[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
