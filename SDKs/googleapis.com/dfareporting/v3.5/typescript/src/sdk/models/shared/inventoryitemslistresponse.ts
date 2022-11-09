import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryItem } from "./inventoryitem";


// InventoryItemsListResponse
/** 
 * Inventory item List Response
**/
export class InventoryItemsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventoryItems", elemType: shared.InventoryItem })
  inventoryItems?: InventoryItem[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
