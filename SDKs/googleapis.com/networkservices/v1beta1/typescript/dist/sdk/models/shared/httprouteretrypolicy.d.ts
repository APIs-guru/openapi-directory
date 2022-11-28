import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specifications for retries.
**/
export declare class HttpRouteRetryPolicy extends SpeakeasyBase {
    numRetries?: number;
    perTryTimeout?: string;
    retryConditions?: string[];
}
