import { SpeakeasyBase } from "../../../internal/utils";
import { RegionalInventory } from "./regionalinventory";
/**
 * A batch entry encoding a single non-batch regional inventory request.
**/
export declare class RegionalinventoryCustomBatchRequestEntry extends SpeakeasyBase {
    batchId?: number;
    merchantId?: string;
    method?: string;
    productId?: string;
    regionalInventory?: RegionalInventory;
}
