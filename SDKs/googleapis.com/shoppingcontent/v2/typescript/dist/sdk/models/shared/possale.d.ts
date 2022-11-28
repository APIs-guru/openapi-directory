import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 * The change of the available quantity of an item at the given store.
**/
export declare class PosSale extends SpeakeasyBase {
    contentLanguage?: string;
    gtin?: string;
    itemId?: string;
    kind?: string;
    price?: Price;
    quantity?: string;
    saleId?: string;
    storeCode?: string;
    targetCountry?: string;
    timestamp?: string;
}
