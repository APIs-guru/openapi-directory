import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddPublicKeyRequest
/** 
 * Request message for AddPublicKey.
**/
export class AddPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
