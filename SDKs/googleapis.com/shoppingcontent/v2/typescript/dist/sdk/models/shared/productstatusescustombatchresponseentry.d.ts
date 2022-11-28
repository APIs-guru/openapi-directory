import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { ProductStatus } from "./productstatus";
/**
 * A batch entry encoding a single non-batch productstatuses response.
**/
export declare class ProductstatusesCustomBatchResponseEntry extends SpeakeasyBase {
    batchId?: number;
    errors?: Errors;
    kind?: string;
    productStatus?: ProductStatus;
}
