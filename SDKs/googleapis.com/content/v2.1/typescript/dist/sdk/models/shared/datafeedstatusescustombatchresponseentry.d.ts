import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedStatus } from "./datafeedstatus";
import { Errors } from "./errors";
/**
 * A batch entry encoding a single non-batch datafeedstatuses response.
**/
export declare class DatafeedstatusesCustomBatchResponseEntry extends SpeakeasyBase {
    batchId?: number;
    datafeedStatus?: DatafeedStatus;
    errors?: Errors;
}
