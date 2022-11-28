import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specifications for retries.
**/
export declare class GrpcRouteRetryPolicy extends SpeakeasyBase {
    numRetries?: number;
    retryConditions?: string[];
}
