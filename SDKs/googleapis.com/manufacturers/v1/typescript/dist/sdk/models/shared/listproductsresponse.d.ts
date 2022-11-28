import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
export declare class ListProductsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    products?: Product[];
}
