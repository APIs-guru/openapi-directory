import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A policy that specifies how Cloud Pub/Sub retries message delivery. Retry delay will be exponential based on provided minimum and maximum backoffs. https://en.wikipedia.org/wiki/Exponential_backoff. RetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message. Retry Policy is implemented on a best effort basis. At times, the delay between consecutive deliveries may not match the configuration. That is, delay can be more or less than configured backoff.
**/
export declare class RetryPolicy extends SpeakeasyBase {
    maximumBackoff?: string;
    minimumBackoff?: string;
}
