import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class PosInventoryRequest extends SpeakeasyBase {
    contentLanguage?: string;
    gtin?: string;
    itemId?: string;
    price?: Price;
    quantity?: string;
    storeCode?: string;
    targetCountry?: string;
    timestamp?: string;
}
