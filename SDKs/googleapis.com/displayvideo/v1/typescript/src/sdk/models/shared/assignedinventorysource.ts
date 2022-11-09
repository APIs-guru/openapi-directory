import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssignedInventorySource
/** 
 * An assignment between a targetable inventory source and an inventory source group.
**/
export class AssignedInventorySource extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignedInventorySourceId" })
  assignedInventorySourceId?: string;

  @Metadata({ data: "json, name=inventorySourceId" })
  inventorySourceId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
