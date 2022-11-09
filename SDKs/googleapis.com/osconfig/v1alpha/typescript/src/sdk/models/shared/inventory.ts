import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryItem } from "./inventoryitem";
import { InventoryOsInfo } from "./inventoryosinfo";


// Inventory
/** 
 * This API resource represents the available inventory data for a Compute Engine virtual machine (VM) instance at a given point in time. You can use this API resource to determine the inventory data of your VM. For more information, see [Information provided by OS inventory management](https://cloud.google.com/compute/docs/instances/os-inventory-management#data-collected).
**/
export class Inventory extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.InventoryItem })
  items?: Map<string, InventoryItem>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=osInfo" })
  osInfo?: InventoryOsInfo;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
