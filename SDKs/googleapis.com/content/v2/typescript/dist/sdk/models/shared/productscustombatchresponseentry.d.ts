import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { Product } from "./product";
/**
 * A batch entry encoding a single non-batch products response.
**/
export declare class ProductsCustomBatchResponseEntry extends SpeakeasyBase {
    batchId?: number;
    errors?: Errors;
    kind?: string;
    product?: Product;
}
