import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignedInventorySource } from "./assignedinventorysource";


// BulkEditAssignedInventorySourcesResponse
/** 
 * Response message for AssignedInventorySourceService.BulkEdit.
**/
export class BulkEditAssignedInventorySourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignedInventorySources", elemType: shared.AssignedInventorySource })
  assignedInventorySources?: AssignedInventorySource[];
}
