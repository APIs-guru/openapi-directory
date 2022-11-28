import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GrpcRouteRetryPolicy
/** 
 * The specifications for retries.
**/
export class GrpcRouteRetryPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numRetries" })
  numRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=retryConditions" })
  retryConditions?: string[];
}
