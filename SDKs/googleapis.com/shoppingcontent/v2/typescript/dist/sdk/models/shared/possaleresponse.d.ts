import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class PosSaleResponse extends SpeakeasyBase {
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
