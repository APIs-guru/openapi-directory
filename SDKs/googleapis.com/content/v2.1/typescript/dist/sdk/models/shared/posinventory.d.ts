import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 * The absolute quantity of an item available at the given store.
**/
export declare class PosInventory extends SpeakeasyBase {
    contentLanguage?: string;
    gtin?: string;
    itemId?: string;
    kind?: string;
    price?: Price;
    quantity?: string;
    storeCode?: string;
    targetCountry?: string;
    timestamp?: string;
}
