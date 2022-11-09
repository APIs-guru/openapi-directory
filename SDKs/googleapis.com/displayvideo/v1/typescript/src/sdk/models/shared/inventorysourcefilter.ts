import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventorySourceFilter
/** 
 * A filtering option for filtering on Inventory Source entities.
**/
export class InventorySourceFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventorySourceIds" })
  inventorySourceIds?: string[];
}
