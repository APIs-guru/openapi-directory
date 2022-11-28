import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A batch entry encoding a single non-batch datafeedstatuses request.
**/
export declare class DatafeedstatusesCustomBatchRequestEntry extends SpeakeasyBase {
    batchId?: number;
    country?: string;
    datafeedId?: string;
    language?: string;
    merchantId?: string;
    method?: string;
}
