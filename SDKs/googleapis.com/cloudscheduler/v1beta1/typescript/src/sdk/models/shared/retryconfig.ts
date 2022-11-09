import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetryConfig
/** 
 * Settings that determine the retry behavior. By default, if a job does not complete successfully (meaning that an acknowledgement is not received from the handler, then it will be retried with exponential backoff according to the settings in RetryConfig.
**/
export class RetryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxBackoffDuration" })
  maxBackoffDuration?: string;

  @Metadata({ data: "json, name=maxDoublings" })
  maxDoublings?: number;

  @Metadata({ data: "json, name=maxRetryDuration" })
  maxRetryDuration?: string;

  @Metadata({ data: "json, name=minBackoffDuration" })
  minBackoffDuration?: string;

  @Metadata({ data: "json, name=retryCount" })
  retryCount?: number;
}
