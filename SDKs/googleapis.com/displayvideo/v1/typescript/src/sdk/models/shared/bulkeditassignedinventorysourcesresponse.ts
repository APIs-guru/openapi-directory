import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedInventorySource } from "./assignedinventorysource";



// BulkEditAssignedInventorySourcesResponse
/** 
 * Response message for AssignedInventorySourceService.BulkEdit.
**/
export class BulkEditAssignedInventorySourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedInventorySources", elemType: AssignedInventorySource })
  assignedInventorySources?: AssignedInventorySource[];
}
