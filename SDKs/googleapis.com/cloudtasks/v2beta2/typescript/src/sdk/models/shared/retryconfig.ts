import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetryConfig
/** 
 * Retry config. These settings determine how a failed task attempt is retried.
**/
export class RetryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxAttempts" })
  maxAttempts?: number;

  @Metadata({ data: "json, name=maxBackoff" })
  maxBackoff?: string;

  @Metadata({ data: "json, name=maxDoublings" })
  maxDoublings?: number;

  @Metadata({ data: "json, name=maxRetryDuration" })
  maxRetryDuration?: string;

  @Metadata({ data: "json, name=minBackoff" })
  minBackoff?: string;

  @Metadata({ data: "json, name=unlimitedAttempts" })
  unlimitedAttempts?: boolean;
}
