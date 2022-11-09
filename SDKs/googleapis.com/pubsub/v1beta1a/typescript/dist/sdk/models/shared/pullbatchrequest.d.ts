import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Request for the PullBatch method.
**/
export declare class PullBatchRequest extends SpeakeasyBase {
    maxEvents?: number;
    returnImmediately?: boolean;
    subscription?: string;
}
