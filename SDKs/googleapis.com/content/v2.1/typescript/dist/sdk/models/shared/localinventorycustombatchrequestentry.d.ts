import { SpeakeasyBase } from "../../../internal/utils";
import { LocalInventory } from "./localinventory";
/**
 * Batch entry encoding a single local inventory update request.
**/
export declare class LocalinventoryCustomBatchRequestEntry extends SpeakeasyBase {
    batchId?: number;
    localInventory?: LocalInventory;
    merchantId?: string;
    method?: string;
    productId?: string;
}
