import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrderLineItemAdjustment extends SpeakeasyBase {
    priceAdjustment?: Price;
    taxAdjustment?: Price;
    type?: string;
}
