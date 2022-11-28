import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventorySourceAccessorsAdvertiserAccessors } from "./inventorysourceaccessorsadvertiseraccessors";
import { InventorySourceAccessorsPartnerAccessor } from "./inventorysourceaccessorspartneraccessor";



// InventorySourceAccessors
/** 
 * The partner or advertisers with access to the inventory source.
**/
export class InventorySourceAccessors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertisers" })
  advertisers?: InventorySourceAccessorsAdvertiserAccessors;

  @SpeakeasyMetadata({ data: "json, name=partner" })
  partner?: InventorySourceAccessorsPartnerAccessor;
}
