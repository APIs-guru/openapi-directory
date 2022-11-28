import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryItem } from "./inventoryitem";



// InventoryItemsListResponse
/** 
 * Inventory item List Response
**/
export class InventoryItemsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventoryItems", elemType: InventoryItem })
  inventoryItems?: InventoryItem[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
