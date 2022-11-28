import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
import { Money } from "./money";
/**
 * A single list item. Each variation of an item in the price list should have its own Item with its own price data.
**/
export declare class Item extends SpeakeasyBase {
    itemId?: string;
    labels?: Label[];
    price?: Money;
}
