import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemovePublicKeyRequest
/** 
 * Request message for RemovePublicKey.
**/
export class RemovePublicKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;
}
