import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedInventorySourceInput } from "./assignedinventorysource";



// BulkEditAssignedInventorySourcesRequestInput
/** 
 * Request message for AssignedInventorySourceService.BulkEdit.
**/
export class BulkEditAssignedInventorySourcesRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAssignedInventorySources", elemType: AssignedInventorySourceInput })
  createdAssignedInventorySources?: AssignedInventorySourceInput[];

  @SpeakeasyMetadata({ data: "json, name=deletedAssignedInventorySources" })
  deletedAssignedInventorySources?: string[];

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;
}
