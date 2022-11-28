import { SpeakeasyBase } from "../../../internal/utils";
import { Datafeed } from "./datafeed";
/**
 * A batch entry encoding a single non-batch datafeeds request.
**/
export declare class DatafeedsCustomBatchRequestEntry extends SpeakeasyBase {
    batchId?: number;
    datafeed?: Datafeed;
    datafeedId?: string;
    merchantId?: string;
    method?: string;
}
