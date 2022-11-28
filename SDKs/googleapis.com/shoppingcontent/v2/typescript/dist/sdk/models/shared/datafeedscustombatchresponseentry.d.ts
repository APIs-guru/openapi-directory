import { SpeakeasyBase } from "../../../internal/utils";
import { Datafeed } from "./datafeed";
import { Errors } from "./errors";
/**
 * A batch entry encoding a single non-batch datafeeds response.
**/
export declare class DatafeedsCustomBatchResponseEntry extends SpeakeasyBase {
    batchId?: number;
    datafeed?: Datafeed;
    errors?: Errors;
}
