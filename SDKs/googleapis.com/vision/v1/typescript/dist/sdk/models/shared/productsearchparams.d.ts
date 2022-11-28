import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
/**
 * Parameters for a product search request.
**/
export declare class ProductSearchParams extends SpeakeasyBase {
    boundingPoly?: BoundingPoly;
    filter?: string;
    productCategories?: string[];
    productSet?: string;
}
