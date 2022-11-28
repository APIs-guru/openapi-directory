import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";



// GoogleLongrunningOperation
/** 
 * This resource represents a long-running operation that is the result of a
 * network API call.
**/
export class GoogleLongrunningOperation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  done?: boolean;

  @SpeakeasyMetadata()
  error?: GoogleRpcStatus;

  @SpeakeasyMetadata()
  metadata?: Map<string, any>;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  response?: Map<string, any>;
}
