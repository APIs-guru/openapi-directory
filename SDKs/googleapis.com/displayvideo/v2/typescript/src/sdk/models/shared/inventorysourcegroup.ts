import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventorySourceGroup
/** 
 * A collection of targetable inventory sources.
**/
export class InventorySourceGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=inventorySourceGroupId" })
  inventorySourceGroupId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
