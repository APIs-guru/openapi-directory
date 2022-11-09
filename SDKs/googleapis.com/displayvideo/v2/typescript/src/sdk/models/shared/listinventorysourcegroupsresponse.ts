import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventorySourceGroup } from "./inventorysourcegroup";


// ListInventorySourceGroupsResponse
/** 
 * Response message for InventorySourceGroupService.ListInventorySourceGroups.
**/
export class ListInventorySourceGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventorySourceGroups", elemType: shared.InventorySourceGroup })
  inventorySourceGroups?: InventorySourceGroup[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
