import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Retry config. These settings determine how a failed task attempt is retried.
**/
export declare class RetryConfig extends SpeakeasyBase {
    maxAttempts?: number;
    maxBackoff?: string;
    maxDoublings?: number;
    maxRetryDuration?: string;
    minBackoff?: string;
    unlimitedAttempts?: boolean;
}
