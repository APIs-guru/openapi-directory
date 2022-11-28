import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryItem } from "./inventoryitem";
/**
 * Inventory item List Response
**/
export declare class InventoryItemsListResponse extends SpeakeasyBase {
    inventoryItems?: InventoryItem[];
    kind?: string;
    nextPageToken?: string;
}
