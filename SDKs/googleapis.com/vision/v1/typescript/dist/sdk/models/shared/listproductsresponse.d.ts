import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
/**
 * Response message for the `ListProducts` method.
**/
export declare class ListProductsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    products?: Product[];
}
