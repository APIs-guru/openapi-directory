import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
/**
 * Batch entry encoding a single local inventory update response.
**/
export declare class LocalinventoryCustomBatchResponseEntry extends SpeakeasyBase {
    batchId?: number;
    errors?: Errors;
    kind?: string;
}
