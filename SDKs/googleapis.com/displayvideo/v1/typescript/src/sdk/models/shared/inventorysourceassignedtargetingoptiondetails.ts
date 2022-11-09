import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventorySourceAssignedTargetingOptionDetails
/** 
 * Targeting details for inventory source. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE`.
**/
export class InventorySourceAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventorySourceId" })
  inventorySourceId?: string;
}
