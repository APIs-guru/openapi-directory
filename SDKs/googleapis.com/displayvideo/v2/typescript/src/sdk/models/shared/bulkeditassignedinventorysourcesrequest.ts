import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignedInventorySource } from "./assignedinventorysource";


// BulkEditAssignedInventorySourcesRequest
/** 
 * Request message for AssignedInventorySourceService.BulkEdit.
**/
export class BulkEditAssignedInventorySourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=createdAssignedInventorySources", elemType: shared.AssignedInventorySource })
  createdAssignedInventorySources?: AssignedInventorySource[];

  @Metadata({ data: "json, name=deletedAssignedInventorySources" })
  deletedAssignedInventorySources?: string[];

  @Metadata({ data: "json, name=partnerId" })
  partnerId?: string;
}
