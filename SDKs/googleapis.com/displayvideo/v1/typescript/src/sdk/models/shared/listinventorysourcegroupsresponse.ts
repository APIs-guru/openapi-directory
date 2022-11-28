import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventorySourceGroup } from "./inventorysourcegroup";



// ListInventorySourceGroupsResponse
/** 
 * Response message for InventorySourceGroupService.ListInventorySourceGroups.
**/
export class ListInventorySourceGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventorySourceGroups", elemType: InventorySourceGroup })
  inventorySourceGroups?: InventorySourceGroup[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
