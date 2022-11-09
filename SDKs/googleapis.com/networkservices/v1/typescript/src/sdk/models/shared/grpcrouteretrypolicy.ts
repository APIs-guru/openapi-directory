import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GrpcRouteRetryPolicy
/** 
 * The specifications for retries.
**/
export class GrpcRouteRetryPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=numRetries" })
  numRetries?: number;

  @Metadata({ data: "json, name=retryConditions" })
  retryConditions?: string[];
}
