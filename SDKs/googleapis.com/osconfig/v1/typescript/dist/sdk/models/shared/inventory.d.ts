import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryItem } from "./inventoryitem";
import { InventoryOsInfo } from "./inventoryosinfo";
/**
 * This API resource represents the available inventory data for a Compute Engine virtual machine (VM) instance at a given point in time. You can use this API resource to determine the inventory data of your VM. For more information, see [Information provided by OS inventory management](https://cloud.google.com/compute/docs/instances/os-inventory-management#data-collected).
**/
export declare class Inventory extends SpeakeasyBase {
    items?: Map<string, InventoryItem>;
    name?: string;
    osInfo?: InventoryOsInfo;
    updateTime?: string;
}
