import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class ProductAmount extends SpeakeasyBase {
    priceAmount?: Price;
    remittedTaxAmount?: Price;
    taxAmount?: Price;
}
