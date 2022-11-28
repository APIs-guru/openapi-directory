import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
export declare class ProductsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: Product[];
}
