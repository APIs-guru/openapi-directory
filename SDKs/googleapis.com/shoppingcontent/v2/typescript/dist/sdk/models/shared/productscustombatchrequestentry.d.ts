import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
/**
 * A batch entry encoding a single non-batch products request.
**/
export declare class ProductsCustomBatchRequestEntry extends SpeakeasyBase {
    batchId?: number;
    merchantId?: string;
    method?: string;
    product?: Product;
    productId?: string;
}
