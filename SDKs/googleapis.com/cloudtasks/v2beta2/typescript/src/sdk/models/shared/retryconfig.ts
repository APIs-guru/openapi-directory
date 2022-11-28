import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetryConfig
/** 
 * Retry config. These settings determine how a failed task attempt is retried.
**/
export class RetryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxAttempts" })
  maxAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=maxBackoff" })
  maxBackoff?: string;

  @SpeakeasyMetadata({ data: "json, name=maxDoublings" })
  maxDoublings?: number;

  @SpeakeasyMetadata({ data: "json, name=maxRetryDuration" })
  maxRetryDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=minBackoff" })
  minBackoff?: string;

  @SpeakeasyMetadata({ data: "json, name=unlimitedAttempts" })
  unlimitedAttempts?: boolean;
}
