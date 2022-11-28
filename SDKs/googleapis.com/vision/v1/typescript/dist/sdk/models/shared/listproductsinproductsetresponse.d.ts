import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
/**
 * Response message for the `ListProductsInProductSet` method.
**/
export declare class ListProductsInProductSetResponse extends SpeakeasyBase {
    nextPageToken?: string;
    products?: Product[];
}
