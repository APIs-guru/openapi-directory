import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Settings that determine the retry behavior. By default, if a job does not complete successfully (meaning that an acknowledgement is not received from the handler, then it will be retried with exponential backoff according to the settings in RetryConfig.
**/
export declare class RetryConfig extends SpeakeasyBase {
    maxBackoffDuration?: string;
    maxDoublings?: number;
    maxRetryDuration?: string;
    minBackoffDuration?: string;
    retryCount?: number;
}
