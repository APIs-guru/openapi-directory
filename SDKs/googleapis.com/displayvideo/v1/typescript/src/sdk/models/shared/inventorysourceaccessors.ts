import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InventorySourceAccessorsAdvertiserAccessors } from "./inventorysourceaccessorsadvertiseraccessors";
import { InventorySourceAccessorsPartnerAccessor } from "./inventorysourceaccessorspartneraccessor";


// InventorySourceAccessors
/** 
 * The partner or advertisers with access to the inventory source.
**/
export class InventorySourceAccessors extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertisers" })
  advertisers?: InventorySourceAccessorsAdvertiserAccessors;

  @Metadata({ data: "json, name=partner" })
  partner?: InventorySourceAccessorsPartnerAccessor;
}
