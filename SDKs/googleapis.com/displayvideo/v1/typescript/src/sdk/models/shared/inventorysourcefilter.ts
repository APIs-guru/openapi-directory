import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventorySourceFilter
/** 
 * A filtering option for filtering on Inventory Source entities.
**/
export class InventorySourceFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventorySourceIds" })
  inventorySourceIds?: string[];
}
