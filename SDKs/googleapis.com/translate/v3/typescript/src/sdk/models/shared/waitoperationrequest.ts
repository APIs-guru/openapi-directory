import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WaitOperationRequest
/** 
 * The request message for Operations.WaitOperation.
**/
export class WaitOperationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=timeout" })
  timeout?: string;
}
