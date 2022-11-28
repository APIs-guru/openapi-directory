import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
/**
 * Information about a product.
**/
export declare class Result extends SpeakeasyBase {
    image?: string;
    product?: Product;
    score?: number;
}
