import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WaitOperationRequest
/** 
 * The request message for Operations.WaitOperation.
**/
export class WaitOperationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
