import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventorySourceGroupAssignedTargetingOptionDetails
/** 
 * Targeting details for inventory source group. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`.
**/
export class InventorySourceGroupAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventorySourceGroupId" })
  inventorySourceGroupId?: string;
}
