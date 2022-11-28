import { SpeakeasyBase } from "../../../internal/utils";
import { InventorySourceGroup } from "./inventorysourcegroup";
/**
 * Response message for InventorySourceGroupService.ListInventorySourceGroups.
**/
export declare class ListInventorySourceGroupsResponse extends SpeakeasyBase {
    inventorySourceGroups?: InventorySourceGroup[];
    nextPageToken?: string;
}
