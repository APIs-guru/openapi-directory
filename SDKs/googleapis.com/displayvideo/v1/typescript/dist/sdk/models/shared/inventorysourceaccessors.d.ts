import { SpeakeasyBase } from "../../../internal/utils";
import { InventorySourceAccessorsAdvertiserAccessors } from "./inventorysourceaccessorsadvertiseraccessors";
import { InventorySourceAccessorsPartnerAccessor } from "./inventorysourceaccessorspartneraccessor";
/**
 * The partner or advertisers with access to the inventory source.
**/
export declare class InventorySourceAccessors extends SpeakeasyBase {
    advertisers?: InventorySourceAccessorsAdvertiserAccessors;
    partner?: InventorySourceAccessorsPartnerAccessor;
}
