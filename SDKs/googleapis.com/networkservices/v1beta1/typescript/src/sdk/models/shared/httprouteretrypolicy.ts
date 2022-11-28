import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRouteRetryPolicy
/** 
 * The specifications for retries.
**/
export class HttpRouteRetryPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numRetries" })
  numRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=perTryTimeout" })
  perTryTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=retryConditions" })
  retryConditions?: string[];
}
