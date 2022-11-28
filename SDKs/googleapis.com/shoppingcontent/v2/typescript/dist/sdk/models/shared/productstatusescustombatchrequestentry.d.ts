import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A batch entry encoding a single non-batch productstatuses request.
**/
export declare class ProductstatusesCustomBatchRequestEntry extends SpeakeasyBase {
    batchId?: number;
    destinations?: string[];
    includeAttributes?: boolean;
    merchantId?: string;
    method?: string;
    productId?: string;
}
