import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 * Information about SKUs appearing in the cost estimate.
**/
export declare class Sku extends SpeakeasyBase {
    displayName?: string;
    prices?: Price[];
    sku?: string;
}
