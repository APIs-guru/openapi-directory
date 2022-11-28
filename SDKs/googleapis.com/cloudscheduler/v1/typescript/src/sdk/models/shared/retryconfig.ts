import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetryConfig
/** 
 * Settings that determine the retry behavior. By default, if a job does not complete successfully (meaning that an acknowledgement is not received from the handler, then it will be retried with exponential backoff according to the settings in RetryConfig.
**/
export class RetryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxBackoffDuration" })
  maxBackoffDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=maxDoublings" })
  maxDoublings?: number;

  @SpeakeasyMetadata({ data: "json, name=maxRetryDuration" })
  maxRetryDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=minBackoffDuration" })
  minBackoffDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=retryCount" })
  retryCount?: number;
}
