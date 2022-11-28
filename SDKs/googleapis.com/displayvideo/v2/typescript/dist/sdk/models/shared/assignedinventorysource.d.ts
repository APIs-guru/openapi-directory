import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An assignment between a targetable inventory source and an inventory source group.
**/
export declare class AssignedInventorySource extends SpeakeasyBase {
    assignedInventorySourceId?: string;
    inventorySourceId?: string;
    name?: string;
}
/**
 * An assignment between a targetable inventory source and an inventory source group.
**/
export declare class AssignedInventorySourceInput extends SpeakeasyBase {
    inventorySourceId?: string;
}
