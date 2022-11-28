import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventorySourceGroupInput
/** 
 * A collection of targetable inventory sources.
**/
export class InventorySourceGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}


// InventorySourceGroup
/** 
 * A collection of targetable inventory sources.
**/
export class InventorySourceGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=inventorySourceGroupId" })
  inventorySourceGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
