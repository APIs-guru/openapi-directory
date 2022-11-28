import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemovePublicKeyRequest
/** 
 * Request message for RemovePublicKey.
**/
export class RemovePublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
