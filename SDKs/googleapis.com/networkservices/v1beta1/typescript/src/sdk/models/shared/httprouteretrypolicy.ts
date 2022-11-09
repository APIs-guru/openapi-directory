import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpRouteRetryPolicy
/** 
 * The specifications for retries.
**/
export class HttpRouteRetryPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=numRetries" })
  numRetries?: number;

  @Metadata({ data: "json, name=perTryTimeout" })
  perTryTimeout?: string;

  @Metadata({ data: "json, name=retryConditions" })
  retryConditions?: string[];
}
