import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssignedInventorySourceInput
/** 
 * An assignment between a targetable inventory source and an inventory source group.
**/
export class AssignedInventorySourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventorySourceId" })
  inventorySourceId?: string;
}


// AssignedInventorySource
/** 
 * An assignment between a targetable inventory source and an inventory source group.
**/
export class AssignedInventorySource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedInventorySourceId" })
  assignedInventorySourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=inventorySourceId" })
  inventorySourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
